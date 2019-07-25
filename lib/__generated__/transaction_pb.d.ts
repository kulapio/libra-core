import * as jspb from "google-protobuf"

import * as access_path_pb from './access_path_pb';
import * as events_pb from './events_pb';
import * as proof_pb from './proof_pb';
import * as transaction_info_pb from './transaction_info_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class RawTransaction extends jspb.Message {
  getSenderAccount(): Uint8Array | string;
  getSenderAccount_asU8(): Uint8Array;
  getSenderAccount_asB64(): string;
  setSenderAccount(value: Uint8Array | string): void;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): void;

  getProgram(): Program | undefined;
  setProgram(value?: Program): void;
  hasProgram(): boolean;
  clearProgram(): void;

  getWriteSet(): WriteSet | undefined;
  setWriteSet(value?: WriteSet): void;
  hasWriteSet(): boolean;
  clearWriteSet(): void;

  getMaxGasAmount(): number;
  setMaxGasAmount(value: number): void;

  getGasUnitPrice(): number;
  setGasUnitPrice(value: number): void;

  getExpirationTime(): number;
  setExpirationTime(value: number): void;

  getPayloadCase(): RawTransaction.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: RawTransaction): RawTransaction.AsObject;
  static serializeBinaryToWriter(message: RawTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawTransaction;
  static deserializeBinaryFromReader(message: RawTransaction, reader: jspb.BinaryReader): RawTransaction;
}

export namespace RawTransaction {
  export type AsObject = {
    senderAccount: Uint8Array | string,
    sequenceNumber: number,
    program?: Program.AsObject,
    writeSet?: WriteSet.AsObject,
    maxGasAmount: number,
    gasUnitPrice: number,
    expirationTime: number,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    PROGRAM = 3,
    WRITE_SET = 4,
  }
}

export class Program extends jspb.Message {
  getCode(): Uint8Array | string;
  getCode_asU8(): Uint8Array;
  getCode_asB64(): string;
  setCode(value: Uint8Array | string): void;

  getArgumentsList(): Array<TransactionArgument>;
  setArgumentsList(value: Array<TransactionArgument>): void;
  clearArgumentsList(): void;
  addArguments(value?: TransactionArgument, index?: number): TransactionArgument;

  getModulesList(): Array<Uint8Array | string>;
  setModulesList(value: Array<Uint8Array | string>): void;
  clearModulesList(): void;
  addModules(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Program.AsObject;
  static toObject(includeInstance: boolean, msg: Program): Program.AsObject;
  static serializeBinaryToWriter(message: Program, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Program;
  static deserializeBinaryFromReader(message: Program, reader: jspb.BinaryReader): Program;
}

export namespace Program {
  export type AsObject = {
    code: Uint8Array | string,
    argumentsList: Array<TransactionArgument.AsObject>,
    modulesList: Array<Uint8Array | string>,
  }
}

export class TransactionArgument extends jspb.Message {
  getType(): TransactionArgument.ArgType;
  setType(value: TransactionArgument.ArgType): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionArgument.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionArgument): TransactionArgument.AsObject;
  static serializeBinaryToWriter(message: TransactionArgument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionArgument;
  static deserializeBinaryFromReader(message: TransactionArgument, reader: jspb.BinaryReader): TransactionArgument;
}

export namespace TransactionArgument {
  export type AsObject = {
    type: TransactionArgument.ArgType,
    data: Uint8Array | string,
  }

  export enum ArgType { 
    U64 = 0,
    ADDRESS = 1,
    STRING = 2,
    BYTEARRAY = 3,
  }
}

export class SignedTransaction extends jspb.Message {
  getRawTxnBytes(): Uint8Array | string;
  getRawTxnBytes_asU8(): Uint8Array;
  getRawTxnBytes_asB64(): string;
  setRawTxnBytes(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getSenderSignature(): Uint8Array | string;
  getSenderSignature_asU8(): Uint8Array;
  getSenderSignature_asB64(): string;
  setSenderSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: SignedTransaction): SignedTransaction.AsObject;
  static serializeBinaryToWriter(message: SignedTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedTransaction;
  static deserializeBinaryFromReader(message: SignedTransaction, reader: jspb.BinaryReader): SignedTransaction;
}

export namespace SignedTransaction {
  export type AsObject = {
    rawTxnBytes: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    senderSignature: Uint8Array | string,
  }
}

export class SignedTransactionWithProof extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getSignedTransaction(): SignedTransaction | undefined;
  setSignedTransaction(value?: SignedTransaction): void;
  hasSignedTransaction(): boolean;
  clearSignedTransaction(): void;

  getProof(): proof_pb.SignedTransactionProof | undefined;
  setProof(value?: proof_pb.SignedTransactionProof): void;
  hasProof(): boolean;
  clearProof(): void;

  getEvents(): events_pb.EventsList | undefined;
  setEvents(value?: events_pb.EventsList): void;
  hasEvents(): boolean;
  clearEvents(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedTransactionWithProof.AsObject;
  static toObject(includeInstance: boolean, msg: SignedTransactionWithProof): SignedTransactionWithProof.AsObject;
  static serializeBinaryToWriter(message: SignedTransactionWithProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedTransactionWithProof;
  static deserializeBinaryFromReader(message: SignedTransactionWithProof, reader: jspb.BinaryReader): SignedTransactionWithProof;
}

export namespace SignedTransactionWithProof {
  export type AsObject = {
    version: number,
    signedTransaction?: SignedTransaction.AsObject,
    proof?: proof_pb.SignedTransactionProof.AsObject,
    events?: events_pb.EventsList.AsObject,
  }
}

export class SignedTransactionsBlock extends jspb.Message {
  getTransactionsList(): Array<SignedTransaction>;
  setTransactionsList(value: Array<SignedTransaction>): void;
  clearTransactionsList(): void;
  addTransactions(value?: SignedTransaction, index?: number): SignedTransaction;

  getValidatorPublicKey(): Uint8Array | string;
  getValidatorPublicKey_asU8(): Uint8Array;
  getValidatorPublicKey_asB64(): string;
  setValidatorPublicKey(value: Uint8Array | string): void;

  getValidatorSignature(): Uint8Array | string;
  getValidatorSignature_asU8(): Uint8Array;
  getValidatorSignature_asB64(): string;
  setValidatorSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedTransactionsBlock.AsObject;
  static toObject(includeInstance: boolean, msg: SignedTransactionsBlock): SignedTransactionsBlock.AsObject;
  static serializeBinaryToWriter(message: SignedTransactionsBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedTransactionsBlock;
  static deserializeBinaryFromReader(message: SignedTransactionsBlock, reader: jspb.BinaryReader): SignedTransactionsBlock;
}

export namespace SignedTransactionsBlock {
  export type AsObject = {
    transactionsList: Array<SignedTransaction.AsObject>,
    validatorPublicKey: Uint8Array | string,
    validatorSignature: Uint8Array | string,
  }
}

export class WriteSet extends jspb.Message {
  getWriteSetList(): Array<WriteOp>;
  setWriteSetList(value: Array<WriteOp>): void;
  clearWriteSetList(): void;
  addWriteSet(value?: WriteOp, index?: number): WriteOp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteSet.AsObject;
  static toObject(includeInstance: boolean, msg: WriteSet): WriteSet.AsObject;
  static serializeBinaryToWriter(message: WriteSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteSet;
  static deserializeBinaryFromReader(message: WriteSet, reader: jspb.BinaryReader): WriteSet;
}

export namespace WriteSet {
  export type AsObject = {
    writeSetList: Array<WriteOp.AsObject>,
  }
}

export class WriteOp extends jspb.Message {
  getAccessPath(): access_path_pb.AccessPath | undefined;
  setAccessPath(value?: access_path_pb.AccessPath): void;
  hasAccessPath(): boolean;
  clearAccessPath(): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getType(): WriteOpType;
  setType(value: WriteOpType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteOp.AsObject;
  static toObject(includeInstance: boolean, msg: WriteOp): WriteOp.AsObject;
  static serializeBinaryToWriter(message: WriteOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteOp;
  static deserializeBinaryFromReader(message: WriteOp, reader: jspb.BinaryReader): WriteOp;
}

export namespace WriteOp {
  export type AsObject = {
    accessPath?: access_path_pb.AccessPath.AsObject,
    value: Uint8Array | string,
    type: WriteOpType,
  }
}

export class AccountState extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountState.AsObject;
  static toObject(includeInstance: boolean, msg: AccountState): AccountState.AsObject;
  static serializeBinaryToWriter(message: AccountState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountState;
  static deserializeBinaryFromReader(message: AccountState, reader: jspb.BinaryReader): AccountState;
}

export namespace AccountState {
  export type AsObject = {
    address: Uint8Array | string,
    blob: Uint8Array | string,
  }
}

export class TransactionToCommit extends jspb.Message {
  getSignedTxn(): SignedTransaction | undefined;
  setSignedTxn(value?: SignedTransaction): void;
  hasSignedTxn(): boolean;
  clearSignedTxn(): void;

  getAccountStatesList(): Array<AccountState>;
  setAccountStatesList(value: Array<AccountState>): void;
  clearAccountStatesList(): void;
  addAccountStates(value?: AccountState, index?: number): AccountState;

  getEventsList(): Array<events_pb.Event>;
  setEventsList(value: Array<events_pb.Event>): void;
  clearEventsList(): void;
  addEvents(value?: events_pb.Event, index?: number): events_pb.Event;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionToCommit.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionToCommit): TransactionToCommit.AsObject;
  static serializeBinaryToWriter(message: TransactionToCommit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionToCommit;
  static deserializeBinaryFromReader(message: TransactionToCommit, reader: jspb.BinaryReader): TransactionToCommit;
}

export namespace TransactionToCommit {
  export type AsObject = {
    signedTxn?: SignedTransaction.AsObject,
    accountStatesList: Array<AccountState.AsObject>,
    eventsList: Array<events_pb.Event.AsObject>,
    gasUsed: number,
  }
}

export class TransactionListWithProof extends jspb.Message {
  getTransactionsList(): Array<SignedTransaction>;
  setTransactionsList(value: Array<SignedTransaction>): void;
  clearTransactionsList(): void;
  addTransactions(value?: SignedTransaction, index?: number): SignedTransaction;

  getInfosList(): Array<transaction_info_pb.TransactionInfo>;
  setInfosList(value: Array<transaction_info_pb.TransactionInfo>): void;
  clearInfosList(): void;
  addInfos(value?: transaction_info_pb.TransactionInfo, index?: number): transaction_info_pb.TransactionInfo;

  getEventsForVersions(): events_pb.EventsForVersions | undefined;
  setEventsForVersions(value?: events_pb.EventsForVersions): void;
  hasEventsForVersions(): boolean;
  clearEventsForVersions(): void;

  getFirstTransactionVersion(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFirstTransactionVersion(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasFirstTransactionVersion(): boolean;
  clearFirstTransactionVersion(): void;

  getProofOfFirstTransaction(): proof_pb.AccumulatorProof | undefined;
  setProofOfFirstTransaction(value?: proof_pb.AccumulatorProof): void;
  hasProofOfFirstTransaction(): boolean;
  clearProofOfFirstTransaction(): void;

  getProofOfLastTransaction(): proof_pb.AccumulatorProof | undefined;
  setProofOfLastTransaction(value?: proof_pb.AccumulatorProof): void;
  hasProofOfLastTransaction(): boolean;
  clearProofOfLastTransaction(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionListWithProof.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionListWithProof): TransactionListWithProof.AsObject;
  static serializeBinaryToWriter(message: TransactionListWithProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionListWithProof;
  static deserializeBinaryFromReader(message: TransactionListWithProof, reader: jspb.BinaryReader): TransactionListWithProof;
}

export namespace TransactionListWithProof {
  export type AsObject = {
    transactionsList: Array<SignedTransaction.AsObject>,
    infosList: Array<transaction_info_pb.TransactionInfo.AsObject>,
    eventsForVersions?: events_pb.EventsForVersions.AsObject,
    firstTransactionVersion?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    proofOfFirstTransaction?: proof_pb.AccumulatorProof.AsObject,
    proofOfLastTransaction?: proof_pb.AccumulatorProof.AsObject,
  }
}

export enum WriteOpType { 
  WRITE = 0,
  DELETE = 1,
}
