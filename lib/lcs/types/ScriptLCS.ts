import {EOL} from 'os'
import {BufferUtil} from '../../common/BufferUtil'
import { TransactionArgumentLCS } from "./TransactionArgumentLCS"

export class ScriptLCS {
    public code: Uint8Array
    public transactionArgs: TransactionArgumentLCS[]

    constructor() {
        this.code = new Uint8Array()
        this.transactionArgs = []
    }

    public setCode(code: string) {
        this.code = BufferUtil.fromString(code)
    }

    public setCodeFromBuffer(code: Uint8Array) {
        this.code = code
    }

    public addTransactionArg(arg:TransactionArgumentLCS) {
        this.transactionArgs.push(arg)
    }

    public toString(): string {
        let result = '{' + EOL
        result += 'code: "' + this.code.toString() + '",' + EOL
        const args:string[] = []
        this.transactionArgs.forEach(x => {
            args.push(x.toString())
        })
        let argStr = args.join(', ')
        argStr = '[' + argStr + ']'
        result += 'args: ' + argStr + ',' + EOL
        result += '}'
        return result 
    }
}