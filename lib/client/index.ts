import axios from 'axios';
import BigNumber from 'bignumber.js';
import {
  AdmissionControlStatus,
  SubmitTransactionRequest,
  SubmitTransactionResponse,
} from '../__generated__/admission_control_pb';
import {
  UpdateToLatestLedgerRequest,
  UpdateToLatestLedgerResponse,
  RequestItem,
  GetAccountStateRequest,
  ResponseItem,
  GetAccountStateResponse
} from '../__generated__/get_with_proof_pb';
import {
  AccountStateBlob,
  AccountStateWithProof
} from '../__generated__/account_state_blob_pb'
import ServerHosts from '../constants/ServerHosts';
import { Account, AccountAddress, AccountState, AccountStates, AccountAddressLike} from '../wallet/Accounts';
import { LibraTransaction, LibraSignedTransaction } from '../transaction';
import { RawTransactionLCS } from '../lcs/types/RawTransactionLCS';
import { ClientDecoder } from './Decoder';
import { KeyPair, Signature } from '../crypto/Eddsa';
import SHA3 from 'sha3';
import HashSaltValues from '../constants/HashSaltValues';
import { LCSSerialization } from '../lcs/serialization';
//import {Buffer} from 'safe-buffer'
import { SignedTransaction } from '../__generated__/transaction_pb';


interface LibraLibConfig {
  transferProtocol?: string; // http, https, socket
  port?: string;
  host?: string;
  dataProtocol?: string; // grpc, grpc-web-text, grpc-web+proto, grpc-web+json, grpc-web+thrift (default is grpc)
  network?: LibraNetwork;
  faucetServerHost?: string;
  validatorSetFile?: string;
}

interface LibraAdmissionControlClientProxy {
  initAdmissionControlClient(connectionAddress: string): any;
  updateToLatestLedger(acClient: any, request: UpdateToLatestLedgerRequest): Promise<UpdateToLatestLedgerResponse>
  submitTransaction(acClient: any, request: SubmitTransactionRequest): Promise<SubmitTransactionResponse>
}

export enum LibraNetwork {
  Testnet = 'testnet',
  // Mainnet = 'mainnet'
}

export class LibraClient {
  private readonly config: LibraLibConfig;
  private readonly admissionControlProxy: LibraAdmissionControlClientProxy;
  private readonly acClient: any; // Admission Control Client (grpc / grpcWeb)
  private readonly decoder: ClientDecoder;

  constructor(config: LibraLibConfig) {
    this.config = config;

    if (config.host === undefined) {
      // since only testnet for now
      this.config.host = ServerHosts.DefaultTestnet;
    }

    if (config.port === undefined) {
      this.config.port = '80';
    }

    if (config.transferProtocol === undefined) {
      this.config.transferProtocol = 'http';
    }

    if (config.dataProtocol === undefined) {
      this.config.dataProtocol = 'grpc';
    }

    // Init Admission Controller Proxy
    if (this.config.dataProtocol === 'grpc') {
      this.admissionControlProxy = require('./Node')
    } else {
      this.admissionControlProxy = require('./Browser')
    }

    const connectionAddress = `${this.config.dataProtocol === 'grpc' ? '' : this.config.transferProtocol + '://'}${this.config.host}:${this.config.port}`;
    this.acClient = this.admissionControlProxy.initAdmissionControlClient(connectionAddress);
    this.decoder = new ClientDecoder()
  }

  /**
   * Uses the faucetService on testnet to mint coins to be sent
   * to receiver.
   *
   * Returns the sequence number for the transaction used to mint
   *
   * Note: `numCoins` should be in base unit i.e microlibra (10^6 I believe).
   */
  public async mintWithFaucetService(
    receiver: AccountAddress | string,
    numCoins: BigNumber | string | number,
    waitForConfirmation: boolean = true,
  ): Promise<string> {
    const serverHost = this.config.faucetServerHost || ServerHosts.DefaultFaucet;
    const coins = new BigNumber(numCoins).toString(10);
    const address = receiver.toString();
    const response = await axios.post(`http://${serverHost}?amount=${coins}&address=${address}`);

    if (response.status !== 200) {
      throw new Error(`Failed to query faucet service. Code: ${response.status}, Err: ${response.data.toString()}`);
    }
    const sequenceNumber = response.data as string;

    /*
    if (waitForConfirmation) {
      await this.waitForConfirmation(AccountAddress.default(), sequenceNumber);
    }
    */

    return sequenceNumber;
  }

  /**
   * Fetch the current state of an account.
   *
   *
   * @param {string} address Accounts address
   */
  public async getAccountState(address: AccountAddressLike): Promise<AccountState> {
    const result = await this.getAccountStates([address]);
    return result[0];
  }

  /**
   * Fetches the current state of multiple accounts.
   *
   * @param {AccountAddressLike[]} addresses Array of users addresses
   */
  public async getAccountStates(addresses: AccountAddressLike[]): Promise<AccountStates> {
    const accountAddresses = addresses.map(address => new AccountAddress(address));

    const request = new UpdateToLatestLedgerRequest();

    accountAddresses.forEach(address => {
      const requestItem = new RequestItem();
      const getAccountStateRequest = new GetAccountStateRequest();
      getAccountStateRequest.setAddress(address.toBytes());
      requestItem.setGetAccountStateRequest(getAccountStateRequest);
      request.addRequestedItems(requestItem);
    });

    const response = await this.admissionControlProxy.updateToLatestLedger(this.acClient, request);

    return response.getResponseItemsList().map((item: ResponseItem, index: number) => {
      const stateResponse = item.getGetAccountStateResponse() as GetAccountStateResponse;
      const stateWithProof = stateResponse.getAccountStateWithProof() as AccountStateWithProof;
      if (stateWithProof.hasBlob()) {
        const stateBlob = stateWithProof.getBlob() as AccountStateBlob;
        const blob = stateBlob.getBlob_asU8();
        return this.decoder.decodeAccountStateBlob(blob);
      }

      return AccountState.default(accountAddresses[index].toHex());
    })
  }

  /**
   * Sign the transaction with keyPair and returns a promise that resolves to a LibraSignedTransaction
   *
   *
   */
  /*
  public async signTransaction(transaction: LibraTransaction, keyPair: KeyPair): Promise<LibraSignedTransaction> {
    const rawTxn = await this.encoder.encodeLibraTransaction(transaction, transaction.sendersAddress);
    //const signature = this.signRawTransaction(rawTxn, keyPair);

    return new LibraSignedTransaction(transaction, keyPair.getPublicKey(), signature);
  }
  */

  /**
   * Transfer coins from sender to receipient.
   * numCoins should be in libraCoins based unit.
   *
   */
  public async transferCoins(
    sender: Account,
    recipientAddress: string,
    numCoins: number | string | BigNumber,
  ): Promise<boolean> {
    const state = await this.getAccountState(sender.getAddress().toHex())
    return await this.execute(LibraTransaction.createTransfer(sender, recipientAddress, new BigNumber(numCoins), state.sequenceNumber), sender);
  }

  /**
   * Execute a transaction by sender.
   *
   */
  public async execute(transaction: RawTransactionLCS, sender:Account): Promise<boolean> {
    
    const request = new SubmitTransactionRequest()
    const senderSignature = await this.signTransaction(transaction, sender.keyPair)
    const publicKeyLen = LCSSerialization.uint32ToByte(senderSignature.publicKey.length)
    const signatureLen = LCSSerialization.uint32ToByte(senderSignature.signature.length)
    const rawTxn = LCSSerialization.rawTransactionToByte(senderSignature.transaction)
    let signedTxn = Buffer.concat([rawTxn, publicKeyLen])
    signedTxn = Buffer.concat([signedTxn, signatureLen])
    signedTxn = Buffer.concat([signedTxn, senderSignature.signature])

    let signedTransaction = new SignedTransaction()
    signedTransaction.setSignedTxn(Uint8Array.from(signedTxn))
    request.setSignedTxn(signedTransaction)
    const response = await this.admissionControlProxy.submitTransaction(this.acClient, request);
    console.log(response)
    console.log(response.getAcStatus())
    console.log(response.getVmStatus())
    console.log(response.getStatusCase())
    return false
  }

  /**
   * Sign the transaction with keyPair and returns a promise that resolves to a LibraSignedTransaction
   *
   *
   */
  public async signTransaction(transaction: RawTransactionLCS, keyPair: KeyPair): Promise<LibraSignedTransaction> {
    const rawTxn = LCSSerialization.rawTransactionToByte(transaction)
    const signature = this.signRawTransaction(rawTxn, keyPair);

    return new LibraSignedTransaction(transaction, keyPair.getPublicKey(), signature);
  }


  private signRawTransaction(rawTransaction: Buffer, keyPair: KeyPair): Signature {
    const hash = new SHA3(256)
      .update(HashSaltValues.rawTransactionHashSalt,'hex')
      .update(rawTransaction)
      .digest();

    return keyPair.sign(hash);
  }
}

exports.LibraNetwork = LibraNetwork

export default LibraClient;

