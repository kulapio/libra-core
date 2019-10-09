import * as jspb from "google-protobuf"

import * as language_storage_pb from './language_storage_pb';

export class VMStatus extends jspb.Message {
  getMajorStatus(): number;
  setMajorStatus(value: number): void;

  getHasSubStatus(): boolean;
  setHasSubStatus(value: boolean): void;

  getSubStatus(): number;
  setSubStatus(value: number): void;

  getHasMessage(): boolean;
  setHasMessage(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VMStatus): VMStatus.AsObject;
  static serializeBinaryToWriter(message: VMStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMStatus;
  static deserializeBinaryFromReader(message: VMStatus, reader: jspb.BinaryReader): VMStatus;
}

export namespace VMStatus {
  export type AsObject = {
    majorStatus: number,
    hasSubStatus: boolean,
    subStatus: number,
    hasMessage: boolean,
    message: string,
  }
}

