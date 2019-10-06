import { LibraAdmissionControlStatus, LibraClient, LibraNetwork, LibraWallet, Account } from '../lib';
import './utils';
import { AccountAddress } from '../lib/wallet/Accounts';

describe('LibraClient', () => {
  let client: LibraClient;

  beforeAll(() => {
    // client = new LibraClient({
    //   transferProtocol: 'https',
    //   host: 'ac-libra-testnet.kulap.io',
    //   port: '443',
    //   dataProtocol: 'grpc-web-text'
    // })
    client = new LibraClient({ network: LibraNetwork.Testnet });
    // client = new LibraClient({ port: '8000' });
  })

  /*
  it('should use minter address and sanity test calling getAccountTransaction()', async () => {
    const account1Address = AccountAddress.default().toHex();

    // It should be safe to assume that the minter has done the 0 sequence
    const trans = await client.getAccountTransaction(account1Address, 0);
    expect(trans!.signedTransaction.transaction.sendersAddress.toString()).toEqual(account1Address);

  }, 5000);
  */

  it('should get accountState correctly', async () => {
    const wallet = new LibraWallet();
    
    // TEST ACCOUNT CREATION
    const account1 = wallet.generateAccount(10)
    const account1Address = account1.getAddress().toHex();
    let account1State = await client.getAccountState(account1Address);
    expect(account1State.balance.toString()).toBe('0')
  }, 5000);

  /*
  it('should transfer coin correctly', async () => {
    const wallet = new LibraWallet({
      mnemonic:
        'lend arm arm addict trust release grid unlock exhibit surround deliver front link bean night dry tuna pledge expect net ankle process mammal great',
    });
    
    // TEST ACCOUNT CREATION
    const account1 = wallet.newAccount();
    const account1Address = account1.getAddress().toHex();
    console.log('Account 1 address', account1Address);
    let account1State = await client.getAccountState(account1Address);
    console.log(account1State)
  }, 5000);
  */

  /*
  it('should query account state and transfer', async () => {
    const wallet = new LibraWallet({
      mnemonic:
        'lend arm arm addict trust release grid unlock exhibit surround deliver front link bean night dry tuna pledge expect net ankle process mammal great',
    });

    // TEST ACCOUNT CREATION
    const account1 = wallet.newAccount();
    const account1Address = account1.getAddress().toHex();
    console.log('Account 1 address', account1Address);
    let account1State = await client.getAccountState(account1Address);

    const account2 = wallet.newAccount();
    const account2Address = account2.getAddress().toHex();
    console.log('Account 2 address', account2Address);
    const account2State = await client.getAccountState(account2Address);

    const amountToTransfer = 1e6;

    // TEST MINITNG Amount
    await client.mintWithFaucetService(account1Address, amountToTransfer);
    const newAccount1State = await client.getAccountState(account1Address);
    // ensure its balance is +xAmount
    expect(newAccount1State.balance.toString(10)).toEqual(account1State.balance.plus(amountToTransfer).toString(10));

    // TEST TRANSFER TRANSACTION OF yAmount
    account1State = await client.getAccountState(account1Address);
    const response = await client.transferCoins(account1, account2Address, amountToTransfer);
    console.log(response)
    expect(response.acStatus).toEqual(LibraAdmissionControlStatus.ACCEPTED);

    // ensure new account balance is +yAmount
    await response.awaitConfirmation(client);
    const newAccount2State = await client.getAccountState(account2Address);
    expect(newAccount2State.balance.toString(10)).toEqual(account2State.balance.plus(amountToTransfer).toString(10));

    // TEST QUERYING TRANSACTION
    const lastTransaction = await client.getAccountTransaction(account1.getAddress(), account1State.sequenceNumber);
    expect(lastTransaction).not.toBeNull();
    // // ensure parameters are decoded properly
    expect(lastTransaction!.signedTransaction.publicKey).bytesToEqual(account1.keyPair.getPublicKey());
    expect(lastTransaction!.signedTransaction.transaction.sequenceNumber).toEqual(account1State.sequenceNumber);
    // // TODO test events from transactions queried
  }, 50000);
  */
});
