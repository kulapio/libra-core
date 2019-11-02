import * as jspb from "google-protobuf"

import * as transaction_info_pb from './transaction_info_pb';

export class AccumulatorProof extends jspb.Message {
  getSiblingsList(): Array<Uint8Array | string>;
  setSiblingsList(value: Array<Uint8Array | string>): void;
  clearSiblingsList(): void;
  addSiblings(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccumulatorProof.AsObject;
  static toObject(includeInstance: boolean, msg: AccumulatorProof): AccumulatorProof.AsObject;
  static serializeBinaryToWriter(message: AccumulatorProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccumulatorProof;
  static deserializeBinaryFromReader(message: AccumulatorProof, reader: jspb.BinaryReader): AccumulatorProof;
}

export namespace AccumulatorProof {
  export type AsObject = {
    siblingsList: Array<Uint8Array | string>,
  }
}

export class SparseMerkleProof extends jspb.Message {
  getLeaf(): Uint8Array | string;
  getLeaf_asU8(): Uint8Array;
  getLeaf_asB64(): string;
  setLeaf(value: Uint8Array | string): void;

  getSiblingsList(): Array<Uint8Array | string>;
  setSiblingsList(value: Array<Uint8Array | string>): void;
  clearSiblingsList(): void;
  addSiblings(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparseMerkleProof.AsObject;
  static toObject(includeInstance: boolean, msg: SparseMerkleProof): SparseMerkleProof.AsObject;
  static serializeBinaryToWriter(message: SparseMerkleProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparseMerkleProof;
  static deserializeBinaryFromReader(message: SparseMerkleProof, reader: jspb.BinaryReader): SparseMerkleProof;
}

export namespace SparseMerkleProof {
  export type AsObject = {
    leaf: Uint8Array | string,
    siblingsList: Array<Uint8Array | string>,
  }
}

export class AccumulatorConsistencyProof extends jspb.Message {
  getSubtreesList(): Array<Uint8Array | string>;
  setSubtreesList(value: Array<Uint8Array | string>): void;
  clearSubtreesList(): void;
  addSubtrees(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccumulatorConsistencyProof.AsObject;
  static toObject(includeInstance: boolean, msg: AccumulatorConsistencyProof): AccumulatorConsistencyProof.AsObject;
  static serializeBinaryToWriter(message: AccumulatorConsistencyProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccumulatorConsistencyProof;
  static deserializeBinaryFromReader(message: AccumulatorConsistencyProof, reader: jspb.BinaryReader): AccumulatorConsistencyProof;
}

export namespace AccumulatorConsistencyProof {
  export type AsObject = {
    subtreesList: Array<Uint8Array | string>,
  }
}

export class AccumulatorRangeProof extends jspb.Message {
  getLeftSiblingsList(): Array<Uint8Array | string>;
  setLeftSiblingsList(value: Array<Uint8Array | string>): void;
  clearLeftSiblingsList(): void;
  addLeftSiblings(value: Uint8Array | string, index?: number): void;

  getRightSiblingsList(): Array<Uint8Array | string>;
  setRightSiblingsList(value: Array<Uint8Array | string>): void;
  clearRightSiblingsList(): void;
  addRightSiblings(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccumulatorRangeProof.AsObject;
  static toObject(includeInstance: boolean, msg: AccumulatorRangeProof): AccumulatorRangeProof.AsObject;
  static serializeBinaryToWriter(message: AccumulatorRangeProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccumulatorRangeProof;
  static deserializeBinaryFromReader(message: AccumulatorRangeProof, reader: jspb.BinaryReader): AccumulatorRangeProof;
}

export namespace AccumulatorRangeProof {
  export type AsObject = {
    leftSiblingsList: Array<Uint8Array | string>,
    rightSiblingsList: Array<Uint8Array | string>,
  }
}

export class TransactionProof extends jspb.Message {
  getLedgerInfoToTransactionInfoProof(): AccumulatorProof | undefined;
  setLedgerInfoToTransactionInfoProof(value?: AccumulatorProof): void;
  hasLedgerInfoToTransactionInfoProof(): boolean;
  clearLedgerInfoToTransactionInfoProof(): void;

  getTransactionInfo(): transaction_info_pb.TransactionInfo | undefined;
  setTransactionInfo(value?: transaction_info_pb.TransactionInfo): void;
  hasTransactionInfo(): boolean;
  clearTransactionInfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionProof.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionProof): TransactionProof.AsObject;
  static serializeBinaryToWriter(message: TransactionProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionProof;
  static deserializeBinaryFromReader(message: TransactionProof, reader: jspb.BinaryReader): TransactionProof;
}

export namespace TransactionProof {
  export type AsObject = {
    ledgerInfoToTransactionInfoProof?: AccumulatorProof.AsObject,
    transactionInfo?: transaction_info_pb.TransactionInfo.AsObject,
  }
}

export class AccountStateProof extends jspb.Message {
  getLedgerInfoToTransactionInfoProof(): AccumulatorProof | undefined;
  setLedgerInfoToTransactionInfoProof(value?: AccumulatorProof): void;
  hasLedgerInfoToTransactionInfoProof(): boolean;
  clearLedgerInfoToTransactionInfoProof(): void;

  getTransactionInfo(): transaction_info_pb.TransactionInfo | undefined;
  setTransactionInfo(value?: transaction_info_pb.TransactionInfo): void;
  hasTransactionInfo(): boolean;
  clearTransactionInfo(): void;

  getTransactionInfoToAccountProof(): SparseMerkleProof | undefined;
  setTransactionInfoToAccountProof(value?: SparseMerkleProof): void;
  hasTransactionInfoToAccountProof(): boolean;
  clearTransactionInfoToAccountProof(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountStateProof.AsObject;
  static toObject(includeInstance: boolean, msg: AccountStateProof): AccountStateProof.AsObject;
  static serializeBinaryToWriter(message: AccountStateProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountStateProof;
  static deserializeBinaryFromReader(message: AccountStateProof, reader: jspb.BinaryReader): AccountStateProof;
}

export namespace AccountStateProof {
  export type AsObject = {
    ledgerInfoToTransactionInfoProof?: AccumulatorProof.AsObject,
    transactionInfo?: transaction_info_pb.TransactionInfo.AsObject,
    transactionInfoToAccountProof?: SparseMerkleProof.AsObject,
  }
}

export class EventProof extends jspb.Message {
  getLedgerInfoToTransactionInfoProof(): AccumulatorProof | undefined;
  setLedgerInfoToTransactionInfoProof(value?: AccumulatorProof): void;
  hasLedgerInfoToTransactionInfoProof(): boolean;
  clearLedgerInfoToTransactionInfoProof(): void;

  getTransactionInfo(): transaction_info_pb.TransactionInfo | undefined;
  setTransactionInfo(value?: transaction_info_pb.TransactionInfo): void;
  hasTransactionInfo(): boolean;
  clearTransactionInfo(): void;

  getTransactionInfoToEventProof(): AccumulatorProof | undefined;
  setTransactionInfoToEventProof(value?: AccumulatorProof): void;
  hasTransactionInfoToEventProof(): boolean;
  clearTransactionInfoToEventProof(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProof.AsObject;
  static toObject(includeInstance: boolean, msg: EventProof): EventProof.AsObject;
  static serializeBinaryToWriter(message: EventProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProof;
  static deserializeBinaryFromReader(message: EventProof, reader: jspb.BinaryReader): EventProof;
}

export namespace EventProof {
  export type AsObject = {
    ledgerInfoToTransactionInfoProof?: AccumulatorProof.AsObject,
    transactionInfo?: transaction_info_pb.TransactionInfo.AsObject,
    transactionInfoToEventProof?: AccumulatorProof.AsObject,
  }
}

export class TransactionListProof extends jspb.Message {
  getLedgerInfoToTransactionInfosProof(): AccumulatorRangeProof | undefined;
  setLedgerInfoToTransactionInfosProof(value?: AccumulatorRangeProof): void;
  hasLedgerInfoToTransactionInfosProof(): boolean;
  clearLedgerInfoToTransactionInfosProof(): void;

  getTransactionInfosList(): Array<transaction_info_pb.TransactionInfo>;
  setTransactionInfosList(value: Array<transaction_info_pb.TransactionInfo>): void;
  clearTransactionInfosList(): void;
  addTransactionInfos(value?: transaction_info_pb.TransactionInfo, index?: number): transaction_info_pb.TransactionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionListProof.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionListProof): TransactionListProof.AsObject;
  static serializeBinaryToWriter(message: TransactionListProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionListProof;
  static deserializeBinaryFromReader(message: TransactionListProof, reader: jspb.BinaryReader): TransactionListProof;
}

export namespace TransactionListProof {
  export type AsObject = {
    ledgerInfoToTransactionInfosProof?: AccumulatorRangeProof.AsObject,
    transactionInfosList: Array<transaction_info_pb.TransactionInfo.AsObject>,
  }
}

