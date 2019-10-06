import {AddressLCS} from './types/AddressLCS'
import {TransactionArgumentLCS} from './types/TransactionArgumentLCS'
import { Buffer } from 'safe-buffer'
import { Uint64LE } from 'int64-buffer'
import { TransactionArgument } from '../__generated__/transaction_pb'
import BigNumber from 'bignumber.js'

export class LCSSerialization {

    static serialize<T>(input:T):string {
        return 'hello world'
    }

    static addressToByte(source:AddressLCS): Buffer {
        const len = this.uint32ToByte(source.length)
        const data = Buffer.from(source.value)
        return Buffer.concat([len, Buffer.from(data)])
    }

    static transactionArgumentToByte(source:TransactionArgumentLCS): Buffer {
        if(source.type === TransactionArgument.ArgType.ADDRESS) {
            const type = this.uint32ToByte(source.type)
            const data = this.addressToByte(source.address)
            return Buffer.concat([type, data])
        } else if(source.type === TransactionArgument.ArgType.U64) {
            const type = this.uint32ToByte(source.type)
            const data = this.uint64ToByte(source.u64)
            return Buffer.concat([type, data])
        } else if(source.type === TransactionArgument.ArgType.STRING) {
            const type = this.uint32ToByte(source.type)
            const data = this.stringToByte(source.string)
            return Buffer.concat([type, data])
        }
        return Buffer.from('')
    }

    static stringToByte(source:string): Buffer {
        const len = this.uint32ToByte(source.length)
        let buffer = Buffer.from(source)
        const data = Buffer.from(buffer.toString('hex'))
        return Buffer.concat([len, data])
    }

    static uint32ToByte(source:number): Buffer {
        let buffer = Buffer.from(new ArrayBuffer(4))
        buffer.writeUInt32LE(source, 0)
        return Buffer.from(buffer.toString('hex'))
    }

    static uint64ToByte(source:BigNumber): Buffer {
        let u64 = new Uint64LE(source.toString())
        let buffer = Buffer.from(u64.toArrayBuffer())
        return Buffer.from(buffer.toString('hex'))
    }
}