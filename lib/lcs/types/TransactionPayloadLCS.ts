import { ProgramLCS } from "./ProgramLCS"

export class TransactionPayloadLCS {
    payloadType: TransactionPayloadType
    program: ProgramLCS

    constructor() {
        this.payloadType = TransactionPayloadType.Program
        this.program = new ProgramLCS()
    }

    static fromProgram(prog:ProgramLCS): TransactionPayloadLCS {
        let payload = new TransactionPayloadLCS()
        payload.payloadType = TransactionPayloadType.Program
        payload.program = prog
        return payload
    }
}

export enum TransactionPayloadType {
    Program = 0,
    WriteSet = 1,
    Script = 2,
    Module = 3
}