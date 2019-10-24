import {BigNumber} from 'bignumber.js'
import {TransactionArgument} from '../../__generated__/transaction_pb'
import { BufferUtil } from '../../common/BufferUtil'
import { AddressLCS } from './AddressLCS'

export class TransactionArgumentLCS {
    public static fromU64(source:string): TransactionArgumentLCS {
      const transactionArg = new TransactionArgumentLCS()
      transactionArg.type = TransactionArgument.ArgType.U64
      transactionArg.u64 = new BigNumber(source)
      return transactionArg
    }

    public static fromAddress(source:AddressLCS): TransactionArgumentLCS {
        const transactionArg = new TransactionArgumentLCS()
        transactionArg.type = TransactionArgument.ArgType.ADDRESS
        transactionArg.address = source
        return transactionArg
    }

    public static fromString(source:string): TransactionArgumentLCS {
        const transactionArg = new TransactionArgumentLCS()
        transactionArg.type = TransactionArgument.ArgType.STRING
        transactionArg.string = source
        return transactionArg
    }

    public static fromByteArray(source:Uint8Array): TransactionArgumentLCS {
        const transactionArg = new TransactionArgumentLCS()
        transactionArg.type = TransactionArgument.ArgType.BYTEARRAY
        transactionArg.byteArray = source
        return transactionArg
    }

    public u64: BigNumber
    public address: AddressLCS
    public string: string
    public byteArray: Uint8Array
    public type: TransactionArgument.ArgType

    constructor() {
        this.u64 = new BigNumber(0)
        this.address = new AddressLCS('')
        this.string = ''
        this.byteArray = new Uint8Array()
        this.type = TransactionArgument.ArgType.U64
    }

    public toString():string {
        if(this.type === TransactionArgument.ArgType.ADDRESS) {
            return '{ADDRESS: ' + this.address.toString() + '}'
        } else if(this.type === TransactionArgument.ArgType.U64) {
            return '{U64: ' + this.u64.toString() + '}'
        } else if(this.type === TransactionArgument.ArgType.STRING) {
            return '{STRING: ' + this.string + '}'
        } else if(this.type === TransactionArgument.ArgType.BYTEARRAY) {
            return '{ByteArray: 0xb"' + BufferUtil.toHex(this.byteArray) + '"}'
        }
        throw new Error('unknow type')
    }
}