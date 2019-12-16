import { ProgramLCS } from "./ProgramLCS"
import { ScriptLCS } from "./ScriptLCS"

export class TransactionPayloadLCS {
    public static fromProgram(prog:ProgramLCS): TransactionPayloadLCS {
      const payload = new TransactionPayloadLCS()
      payload.payloadType = TransactionPayloadType.Program
      payload.program = prog
      return payload
    }

    public static fromScript(script: ScriptLCS): TransactionPayloadLCS {
        const payload = new TransactionPayloadLCS()
        payload.payloadType = TransactionPayloadType.Script
        payload.script = script
        return payload
    }

    public payloadType: TransactionPayloadType
    public program: ProgramLCS
    public script: ScriptLCS

    constructor() {
        this.payloadType = TransactionPayloadType.Program
        this.program = new ProgramLCS()
        this.script = new ScriptLCS()
    }
}

export enum TransactionPayloadType {
    Program = 0,
    WriteSet = 1,
    Script = 2,
    Module = 3
}