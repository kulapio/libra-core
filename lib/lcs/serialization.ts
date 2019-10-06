import {AddressLCS} from './types/AddressLCS'
import {ProgramLCS} from './types/ProgramLCS'
import {TransactionArgumentLCS} from './types/TransactionArgumentLCS'
//import { Buffer } from 'safe-buffer'
import { Uint64LE } from 'int64-buffer'
import { TransactionArgument } from '../__generated__/transaction_pb'
import BigNumber from 'bignumber.js'
import { TransactionPayloadLCS, TransactionPayloadType } from './types/TransactionPayloadLCS'
import { RawTransactionLCS } from './types/RawTransactionLCS'

export class LCSSerialization {

    static addressToByte(source:AddressLCS): Buffer {
        const len = this.uint32ToByte(source.length)
        const data = Buffer.from(source.value)
        return Buffer.concat([len, Buffer.from(data)])
    }

    static transactionArgumentToByte(source:TransactionArgumentLCS): Buffer {
        const type = this.uint32ToByte(source.type)
        if(source.type === TransactionArgument.ArgType.ADDRESS) {
            const data = this.addressToByte(source.address)
            return Buffer.concat([type, data])
        } else if(source.type === TransactionArgument.ArgType.U64) {
            const data = this.uint64ToByte(source.u64)
            return Buffer.concat([type, data])
        } else if(source.type === TransactionArgument.ArgType.STRING) {
            const data = this.stringToByte(source.string)
            return Buffer.concat([type, data])
        } else if(source.type === TransactionArgument.ArgType.BYTEARRAY) {
            const data = this.byteArrayToByte(source.byteArray)
            return Buffer.concat([type, data])
        }
        return Buffer.from('')
    }

    static programToByte(source: ProgramLCS): Buffer {
        const code = this.byteArrayToByte(source.code)
        const argLen = this.uint32ToByte(source.transactionArgs.length)
        let result = Buffer.concat([code, argLen])
        source.transactionArgs.forEach(x => {
            const argData = this.transactionArgumentToByte(x)
            result = Buffer.concat([result, argData])
        })
        const moduleData = this.listByteArrayToByte(source.modules)
        result = Buffer.concat([result, moduleData])
        return result
    }

    static transactionPayloadToByte(source: TransactionPayloadLCS): Buffer {
        const code = this.uint32ToByte(source.payloadType)
        if(source.payloadType === TransactionPayloadType.Program) {
            const data = this.programToByte(source.program)
            return Buffer.concat([code, data])
        }
        return Buffer.from('')
    }

    static rawTransactionToByte(source: RawTransactionLCS): Buffer {
        const sender = this.addressToByte(source.sender)
        const sequence = this.uint64ToByte(source.sequenceNumber)
        let result = Buffer.concat([sender, sequence])
        const payload = this.transactionPayloadToByte(source.payload)
        result = Buffer.concat([result, payload])
        const maxGasAmount = this.uint64ToByte(source.maxGasAmount)
        result = Buffer.concat([result, maxGasAmount])
        const gas = this.uint64ToByte(source.gasUnitPrice)
        result = Buffer.concat([result, gas])
        const expire = this.uint64ToByte(source.expirtationTime)
        result = Buffer.concat([result, expire])
        return result
    }

    static listByteArrayToByte(sources: Buffer[]): Buffer {
        const len = this.uint32ToByte(sources.length)
        let result = Buffer.concat([len])
        sources.forEach(x => {
            const len = this.uint32ToByte(x.length)
            const data = Buffer.from(x.toString('hex'))
            result = Buffer.concat([result, len, data])
        })
        return result
    }

    static byteArrayToByte(source:Buffer): Buffer {
        const len = this.uint32ToByte(source.length)
        const buffer = Buffer.from(source)
        const data = Buffer.from(buffer.toString('hex'))
        return Buffer.concat([len, data])
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