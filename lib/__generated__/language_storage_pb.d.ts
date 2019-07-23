import * as jspb from "google-protobuf"

export class ModuleId extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleId.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleId): ModuleId.AsObject;
  static serializeBinaryToWriter(message: ModuleId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleId;
  static deserializeBinaryFromReader(message: ModuleId, reader: jspb.BinaryReader): ModuleId;
}

export namespace ModuleId {
  export type AsObject = {
    address: Uint8Array | string,
    name: string,
  }
}

