import * as jspb from "google-protobuf"

import * as events_pb from './events_pb';
import * as ledger_info_pb from './ledger_info_pb';

export class ValidatorChangeEventWithProof extends jspb.Message {
  getLedgerInfoWithSigs(): ledger_info_pb.LedgerInfoWithSignatures | undefined;
  setLedgerInfoWithSigs(value?: ledger_info_pb.LedgerInfoWithSignatures): void;
  hasLedgerInfoWithSigs(): boolean;
  clearLedgerInfoWithSigs(): void;

  getEventWithProof(): events_pb.EventWithProof | undefined;
  setEventWithProof(value?: events_pb.EventWithProof): void;
  hasEventWithProof(): boolean;
  clearEventWithProof(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorChangeEventWithProof.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorChangeEventWithProof): ValidatorChangeEventWithProof.AsObject;
  static serializeBinaryToWriter(message: ValidatorChangeEventWithProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorChangeEventWithProof;
  static deserializeBinaryFromReader(message: ValidatorChangeEventWithProof, reader: jspb.BinaryReader): ValidatorChangeEventWithProof;
}

export namespace ValidatorChangeEventWithProof {
  export type AsObject = {
    ledgerInfoWithSigs?: ledger_info_pb.LedgerInfoWithSignatures.AsObject,
    eventWithProof?: events_pb.EventWithProof.AsObject,
  }
}

