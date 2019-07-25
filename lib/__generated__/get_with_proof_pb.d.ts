import * as jspb from "google-protobuf"

import * as access_path_pb from './access_path_pb';
import * as account_state_blob_pb from './account_state_blob_pb';
import * as events_pb from './events_pb';
import * as ledger_info_pb from './ledger_info_pb';
import * as transaction_pb from './transaction_pb';
import * as validator_change_pb from './validator_change_pb';

export class UpdateToLatestLedgerRequest extends jspb.Message {
  getClientKnownVersion(): number;
  setClientKnownVersion(value: number): void;

  getRequestedItemsList(): Array<RequestItem>;
  setRequestedItemsList(value: Array<RequestItem>): void;
  clearRequestedItemsList(): void;
  addRequestedItems(value?: RequestItem, index?: number): RequestItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateToLatestLedgerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateToLatestLedgerRequest): UpdateToLatestLedgerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateToLatestLedgerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateToLatestLedgerRequest;
  static deserializeBinaryFromReader(message: UpdateToLatestLedgerRequest, reader: jspb.BinaryReader): UpdateToLatestLedgerRequest;
}

export namespace UpdateToLatestLedgerRequest {
  export type AsObject = {
    clientKnownVersion: number,
    requestedItemsList: Array<RequestItem.AsObject>,
  }
}

export class RequestItem extends jspb.Message {
  getGetAccountStateRequest(): GetAccountStateRequest | undefined;
  setGetAccountStateRequest(value?: GetAccountStateRequest): void;
  hasGetAccountStateRequest(): boolean;
  clearGetAccountStateRequest(): void;

  getGetAccountTransactionBySequenceNumberRequest(): GetAccountTransactionBySequenceNumberRequest | undefined;
  setGetAccountTransactionBySequenceNumberRequest(value?: GetAccountTransactionBySequenceNumberRequest): void;
  hasGetAccountTransactionBySequenceNumberRequest(): boolean;
  clearGetAccountTransactionBySequenceNumberRequest(): void;

  getGetEventsByEventAccessPathRequest(): GetEventsByEventAccessPathRequest | undefined;
  setGetEventsByEventAccessPathRequest(value?: GetEventsByEventAccessPathRequest): void;
  hasGetEventsByEventAccessPathRequest(): boolean;
  clearGetEventsByEventAccessPathRequest(): void;

  getGetTransactionsRequest(): GetTransactionsRequest | undefined;
  setGetTransactionsRequest(value?: GetTransactionsRequest): void;
  hasGetTransactionsRequest(): boolean;
  clearGetTransactionsRequest(): void;

  getRequestedItemsCase(): RequestItem.RequestedItemsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestItem.AsObject;
  static toObject(includeInstance: boolean, msg: RequestItem): RequestItem.AsObject;
  static serializeBinaryToWriter(message: RequestItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestItem;
  static deserializeBinaryFromReader(message: RequestItem, reader: jspb.BinaryReader): RequestItem;
}

export namespace RequestItem {
  export type AsObject = {
    getAccountStateRequest?: GetAccountStateRequest.AsObject,
    getAccountTransactionBySequenceNumberRequest?: GetAccountTransactionBySequenceNumberRequest.AsObject,
    getEventsByEventAccessPathRequest?: GetEventsByEventAccessPathRequest.AsObject,
    getTransactionsRequest?: GetTransactionsRequest.AsObject,
  }

  export enum RequestedItemsCase { 
    REQUESTED_ITEMS_NOT_SET = 0,
    GET_ACCOUNT_STATE_REQUEST = 1,
    GET_ACCOUNT_TRANSACTION_BY_SEQUENCE_NUMBER_REQUEST = 2,
    GET_EVENTS_BY_EVENT_ACCESS_PATH_REQUEST = 3,
    GET_TRANSACTIONS_REQUEST = 4,
  }
}

export class UpdateToLatestLedgerResponse extends jspb.Message {
  getResponseItemsList(): Array<ResponseItem>;
  setResponseItemsList(value: Array<ResponseItem>): void;
  clearResponseItemsList(): void;
  addResponseItems(value?: ResponseItem, index?: number): ResponseItem;

  getLedgerInfoWithSigs(): ledger_info_pb.LedgerInfoWithSignatures | undefined;
  setLedgerInfoWithSigs(value?: ledger_info_pb.LedgerInfoWithSignatures): void;
  hasLedgerInfoWithSigs(): boolean;
  clearLedgerInfoWithSigs(): void;

  getValidatorChangeEventsList(): Array<validator_change_pb.ValidatorChangeEventWithProof>;
  setValidatorChangeEventsList(value: Array<validator_change_pb.ValidatorChangeEventWithProof>): void;
  clearValidatorChangeEventsList(): void;
  addValidatorChangeEvents(value?: validator_change_pb.ValidatorChangeEventWithProof, index?: number): validator_change_pb.ValidatorChangeEventWithProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateToLatestLedgerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateToLatestLedgerResponse): UpdateToLatestLedgerResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateToLatestLedgerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateToLatestLedgerResponse;
  static deserializeBinaryFromReader(message: UpdateToLatestLedgerResponse, reader: jspb.BinaryReader): UpdateToLatestLedgerResponse;
}

export namespace UpdateToLatestLedgerResponse {
  export type AsObject = {
    responseItemsList: Array<ResponseItem.AsObject>,
    ledgerInfoWithSigs?: ledger_info_pb.LedgerInfoWithSignatures.AsObject,
    validatorChangeEventsList: Array<validator_change_pb.ValidatorChangeEventWithProof.AsObject>,
  }
}

export class ResponseItem extends jspb.Message {
  getGetAccountStateResponse(): GetAccountStateResponse | undefined;
  setGetAccountStateResponse(value?: GetAccountStateResponse): void;
  hasGetAccountStateResponse(): boolean;
  clearGetAccountStateResponse(): void;

  getGetAccountTransactionBySequenceNumberResponse(): GetAccountTransactionBySequenceNumberResponse | undefined;
  setGetAccountTransactionBySequenceNumberResponse(value?: GetAccountTransactionBySequenceNumberResponse): void;
  hasGetAccountTransactionBySequenceNumberResponse(): boolean;
  clearGetAccountTransactionBySequenceNumberResponse(): void;

  getGetEventsByEventAccessPathResponse(): GetEventsByEventAccessPathResponse | undefined;
  setGetEventsByEventAccessPathResponse(value?: GetEventsByEventAccessPathResponse): void;
  hasGetEventsByEventAccessPathResponse(): boolean;
  clearGetEventsByEventAccessPathResponse(): void;

  getGetTransactionsResponse(): GetTransactionsResponse | undefined;
  setGetTransactionsResponse(value?: GetTransactionsResponse): void;
  hasGetTransactionsResponse(): boolean;
  clearGetTransactionsResponse(): void;

  getResponseItemsCase(): ResponseItem.ResponseItemsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseItem.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseItem): ResponseItem.AsObject;
  static serializeBinaryToWriter(message: ResponseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseItem;
  static deserializeBinaryFromReader(message: ResponseItem, reader: jspb.BinaryReader): ResponseItem;
}

export namespace ResponseItem {
  export type AsObject = {
    getAccountStateResponse?: GetAccountStateResponse.AsObject,
    getAccountTransactionBySequenceNumberResponse?: GetAccountTransactionBySequenceNumberResponse.AsObject,
    getEventsByEventAccessPathResponse?: GetEventsByEventAccessPathResponse.AsObject,
    getTransactionsResponse?: GetTransactionsResponse.AsObject,
  }

  export enum ResponseItemsCase { 
    RESPONSE_ITEMS_NOT_SET = 0,
    GET_ACCOUNT_STATE_RESPONSE = 3,
    GET_ACCOUNT_TRANSACTION_BY_SEQUENCE_NUMBER_RESPONSE = 4,
    GET_EVENTS_BY_EVENT_ACCESS_PATH_RESPONSE = 5,
    GET_TRANSACTIONS_RESPONSE = 6,
  }
}

export class GetAccountStateRequest extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountStateRequest): GetAccountStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountStateRequest;
  static deserializeBinaryFromReader(message: GetAccountStateRequest, reader: jspb.BinaryReader): GetAccountStateRequest;
}

export namespace GetAccountStateRequest {
  export type AsObject = {
    address: Uint8Array | string,
  }
}

export class GetAccountStateResponse extends jspb.Message {
  getAccountStateWithProof(): account_state_blob_pb.AccountStateWithProof | undefined;
  setAccountStateWithProof(value?: account_state_blob_pb.AccountStateWithProof): void;
  hasAccountStateWithProof(): boolean;
  clearAccountStateWithProof(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountStateResponse): GetAccountStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountStateResponse;
  static deserializeBinaryFromReader(message: GetAccountStateResponse, reader: jspb.BinaryReader): GetAccountStateResponse;
}

export namespace GetAccountStateResponse {
  export type AsObject = {
    accountStateWithProof?: account_state_blob_pb.AccountStateWithProof.AsObject,
  }
}

export class GetAccountTransactionBySequenceNumberRequest extends jspb.Message {
  getAccount(): Uint8Array | string;
  getAccount_asU8(): Uint8Array;
  getAccount_asB64(): string;
  setAccount(value: Uint8Array | string): void;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): void;

  getFetchEvents(): boolean;
  setFetchEvents(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountTransactionBySequenceNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountTransactionBySequenceNumberRequest): GetAccountTransactionBySequenceNumberRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountTransactionBySequenceNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountTransactionBySequenceNumberRequest;
  static deserializeBinaryFromReader(message: GetAccountTransactionBySequenceNumberRequest, reader: jspb.BinaryReader): GetAccountTransactionBySequenceNumberRequest;
}

export namespace GetAccountTransactionBySequenceNumberRequest {
  export type AsObject = {
    account: Uint8Array | string,
    sequenceNumber: number,
    fetchEvents: boolean,
  }
}

export class GetAccountTransactionBySequenceNumberResponse extends jspb.Message {
  getSignedTransactionWithProof(): transaction_pb.SignedTransactionWithProof | undefined;
  setSignedTransactionWithProof(value?: transaction_pb.SignedTransactionWithProof): void;
  hasSignedTransactionWithProof(): boolean;
  clearSignedTransactionWithProof(): void;

  getProofOfCurrentSequenceNumber(): account_state_blob_pb.AccountStateWithProof | undefined;
  setProofOfCurrentSequenceNumber(value?: account_state_blob_pb.AccountStateWithProof): void;
  hasProofOfCurrentSequenceNumber(): boolean;
  clearProofOfCurrentSequenceNumber(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountTransactionBySequenceNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountTransactionBySequenceNumberResponse): GetAccountTransactionBySequenceNumberResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountTransactionBySequenceNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountTransactionBySequenceNumberResponse;
  static deserializeBinaryFromReader(message: GetAccountTransactionBySequenceNumberResponse, reader: jspb.BinaryReader): GetAccountTransactionBySequenceNumberResponse;
}

export namespace GetAccountTransactionBySequenceNumberResponse {
  export type AsObject = {
    signedTransactionWithProof?: transaction_pb.SignedTransactionWithProof.AsObject,
    proofOfCurrentSequenceNumber?: account_state_blob_pb.AccountStateWithProof.AsObject,
  }
}

export class GetEventsByEventAccessPathRequest extends jspb.Message {
  getAccessPath(): access_path_pb.AccessPath | undefined;
  setAccessPath(value?: access_path_pb.AccessPath): void;
  hasAccessPath(): boolean;
  clearAccessPath(): void;

  getStartEventSeqNum(): number;
  setStartEventSeqNum(value: number): void;

  getAscending(): boolean;
  setAscending(value: boolean): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsByEventAccessPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsByEventAccessPathRequest): GetEventsByEventAccessPathRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventsByEventAccessPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsByEventAccessPathRequest;
  static deserializeBinaryFromReader(message: GetEventsByEventAccessPathRequest, reader: jspb.BinaryReader): GetEventsByEventAccessPathRequest;
}

export namespace GetEventsByEventAccessPathRequest {
  export type AsObject = {
    accessPath?: access_path_pb.AccessPath.AsObject,
    startEventSeqNum: number,
    ascending: boolean,
    limit: number,
  }
}

export class GetEventsByEventAccessPathResponse extends jspb.Message {
  getEventsWithProofList(): Array<events_pb.EventWithProof>;
  setEventsWithProofList(value: Array<events_pb.EventWithProof>): void;
  clearEventsWithProofList(): void;
  addEventsWithProof(value?: events_pb.EventWithProof, index?: number): events_pb.EventWithProof;

  getProofOfLatestEvent(): account_state_blob_pb.AccountStateWithProof | undefined;
  setProofOfLatestEvent(value?: account_state_blob_pb.AccountStateWithProof): void;
  hasProofOfLatestEvent(): boolean;
  clearProofOfLatestEvent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsByEventAccessPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsByEventAccessPathResponse): GetEventsByEventAccessPathResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventsByEventAccessPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsByEventAccessPathResponse;
  static deserializeBinaryFromReader(message: GetEventsByEventAccessPathResponse, reader: jspb.BinaryReader): GetEventsByEventAccessPathResponse;
}

export namespace GetEventsByEventAccessPathResponse {
  export type AsObject = {
    eventsWithProofList: Array<events_pb.EventWithProof.AsObject>,
    proofOfLatestEvent?: account_state_blob_pb.AccountStateWithProof.AsObject,
  }
}

export class GetTransactionsRequest extends jspb.Message {
  getStartVersion(): number;
  setStartVersion(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getFetchEvents(): boolean;
  setFetchEvents(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsRequest): GetTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsRequest;
  static deserializeBinaryFromReader(message: GetTransactionsRequest, reader: jspb.BinaryReader): GetTransactionsRequest;
}

export namespace GetTransactionsRequest {
  export type AsObject = {
    startVersion: number,
    limit: number,
    fetchEvents: boolean,
  }
}

export class GetTransactionsResponse extends jspb.Message {
  getTxnListWithProof(): transaction_pb.TransactionListWithProof | undefined;
  setTxnListWithProof(value?: transaction_pb.TransactionListWithProof): void;
  hasTxnListWithProof(): boolean;
  clearTxnListWithProof(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsResponse): GetTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsResponse;
  static deserializeBinaryFromReader(message: GetTransactionsResponse, reader: jspb.BinaryReader): GetTransactionsResponse;
}

export namespace GetTransactionsResponse {
  export type AsObject = {
    txnListWithProof?: transaction_pb.TransactionListWithProof.AsObject,
  }
}

