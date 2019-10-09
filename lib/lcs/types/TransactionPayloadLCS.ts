import { ProgramLCS } from "./ProgramLCS"

export class TransactionPayloadLCS {
    public static fromProgram(prog:ProgramLCS): TransactionPayloadLCS {
      const payload = new TransactionPayloadLCS()
      payload.payloadType = TransactionPayloadType.Program
      payload.program = prog
      return payload
    }

    public payloadType: TransactionPayloadType
    public program: ProgramLCS

    constructor() {
        this.payloadType = TransactionPayloadType.Program
        this.program = new ProgramLCS()
    }
}

export enum TransactionPayloadType {
    Program = 0,
    WriteSet = 1,
    Script = 2,
    Module = 3
}