import * as jspb from "google-protobuf"

import * as events_pb from './events_pb';
import * as ledger_info_pb from './ledger_info_pb';

export class ValidatorChangeEventWithProof extends jspb.Message {
  getLedgerInfoWithSigsList(): Array<ledger_info_pb.LedgerInfoWithSignatures>;
  setLedgerInfoWithSigsList(value: Array<ledger_info_pb.LedgerInfoWithSignatures>): void;
  clearLedgerInfoWithSigsList(): void;
  addLedgerInfoWithSigs(value?: ledger_info_pb.LedgerInfoWithSignatures, index?: number): ledger_info_pb.LedgerInfoWithSignatures;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorChangeEventWithProof.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorChangeEventWithProof): ValidatorChangeEventWithProof.AsObject;
  static serializeBinaryToWriter(message: ValidatorChangeEventWithProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorChangeEventWithProof;
  static deserializeBinaryFromReader(message: ValidatorChangeEventWithProof, reader: jspb.BinaryReader): ValidatorChangeEventWithProof;
}

export namespace ValidatorChangeEventWithProof {
  export type AsObject = {
    ledgerInfoWithSigsList: Array<ledger_info_pb.LedgerInfoWithSignatures.AsObject>,
  }
}

