import {EOL} from 'os'
import {BufferUtil} from '../../common/BufferUtil'
import { TransactionArgumentLCS } from "./TransactionArgumentLCS"

export class ProgramLCS {
    public code: Uint8Array
    public transactionArgs: TransactionArgumentLCS[]
    public modules: Uint8Array[]

    constructor() {
        this.code = new Uint8Array()
        this.transactionArgs = []
        this.modules = []
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

    public addModule(module: string) {
        this.modules.push(BufferUtil.fromHex(module))
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
        const modules:string[] = []
        this.modules.forEach(x => {
            modules.push('[' + BufferUtil.toHex(x) + ']')
        })
        let moduleStr = modules.join('')
        moduleStr = '[' + moduleStr + ']'
        result += 'modules: ' + moduleStr + ',' + EOL
        result += '}'
        return result 
    }
}