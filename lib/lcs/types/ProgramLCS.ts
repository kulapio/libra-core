import { TransactionArgumentLCS } from "./TransactionArgumentLCS"
//import { Buffer } from 'safe-buffer'
import {EOL} from 'os'

export class ProgramLCS {
    code: Buffer
    transactionArgs: TransactionArgumentLCS[]
    modules: Buffer[]

    constructor() {
        this.code = Buffer.from('')
        this.transactionArgs = []
        this.modules = []
    }

    setCode(code: string) {
        this.code = Buffer.from(code)
    }

    setCodeFromBuffer(code: Buffer) {
        this.code = code
    }

    addTransactionArg(arg:TransactionArgumentLCS) {
        this.transactionArgs.push(arg)
    }

    addModule(module: string) {
        this.modules.push(Buffer.from(module.toLowerCase(), 'hex'))
    }

    toString(): string {
        let result = '{' + EOL
        result += 'code: "' + this.code.toString() + '",' + EOL
        let args:string[] = []
        this.transactionArgs.forEach(x => {
            args.push(x.toString())
        })
        let argStr = args.join(', ')
        argStr = '[' + argStr + ']'
        result += 'args: ' + argStr + ',' + EOL
        let modules:string[] = []
        this.modules.forEach(x => {
            modules.push('[' + x.toString('hex') + ']')
        })
        let moduleStr = modules.join('')
        moduleStr = '[' + moduleStr + ']'
        result += 'modules: ' + moduleStr + ',' + EOL
        result += '}'
        return result 
    }
}