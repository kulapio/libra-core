import {Buffer} from 'safe-buffer'
import {TransactionArgument} from '../../__generated__/transaction_pb'
import { AddressLCS } from './AddressLCS'
import {BigNumber} from 'bignumber.js'

export class TransactionArgumentLCS {
    u64: BigNumber
    address: AddressLCS
    string: string
    byteArray: Buffer
    type: TransactionArgument.ArgType

    constructor() {
        this.u64 = new BigNumber(0)
        this.address = new AddressLCS('')
        this.string = ''
        this.byteArray = Buffer.from('')
        this.type = TransactionArgument.ArgType.U64
    }

    static fromU64(source:string): TransactionArgumentLCS {
        let transactionArg = new TransactionArgumentLCS()
        transactionArg.type = TransactionArgument.ArgType.U64
        transactionArg.u64 = new BigNumber(source)
        return transactionArg
    }

    static fromAddress(source:AddressLCS): TransactionArgumentLCS {
        let transactionArg = new TransactionArgumentLCS()
        transactionArg.type = TransactionArgument.ArgType.ADDRESS
        transactionArg.address = source
        return transactionArg
    }

    static fromString(source:string): TransactionArgumentLCS {
        let transactionArg = new TransactionArgumentLCS()
        transactionArg.type = TransactionArgument.ArgType.STRING
        transactionArg.string = source
        return transactionArg
    }

    toString():string {
        if(this.type === TransactionArgument.ArgType.ADDRESS) {
            return '{ADDRESS: ' + this.address.toString() + '}'
        } else if(this.type === TransactionArgument.ArgType.U64) {
            return '{U64: ' + this.u64.toString() + '}'
        } else if(this.type === TransactionArgument.ArgType.STRING) {
            return '{STRING: ' + this.string + '}'
        }
        return ''
    }
}