import {AddressLCS} from './types/AddressLCS'
import {ProgramLCS} from './types/ProgramLCS'
import {TransactionArgumentLCS} from './types/TransactionArgumentLCS'
import { Uint64LE } from 'int64-buffer'
import { TransactionArgument } from '../__generated__/transaction_pb'
import BigNumber from 'bignumber.js'
import { TransactionPayloadLCS, TransactionPayloadType } from './types/TransactionPayloadLCS'
import { RawTransactionLCS } from './types/RawTransactionLCS'
import {BufferUtil} from '../common/BufferUtil'

export class LCSSerialization {

    static addressToByte(source:AddressLCS): Uint8Array {
        const len = this.uint32ToByte(source.length)
        const data = BufferUtil.fromHex(source.value)
        return BufferUtil.concat(len, data)
    }

    static transactionArgumentToByte(source:TransactionArgumentLCS): Uint8Array {
        const type = this.uint32ToByte(source.type)
        if(source.type === TransactionArgument.ArgType.ADDRESS) {
            const data = this.addressToByte(source.address)
            return BufferUtil.concat(type, data)
        } else if(source.type === TransactionArgument.ArgType.U64) {
            const data = this.uint64ToByte(source.u64)
            return BufferUtil.concat(type, data)
        } else if(source.type === TransactionArgument.ArgType.STRING) {
            const data = this.stringToByte(source.string)
            return BufferUtil.concat(type, data)
        } else if(source.type === TransactionArgument.ArgType.BYTEARRAY) {
            const data = this.byteArrayToByte(source.byteArray)
            return BufferUtil.concat(type, data)
        }
        return new Uint8Array()
    }

    static programToByte(source: ProgramLCS): Uint8Array {
        const code = this.byteArrayToByte(source.code)
        const argLen = this.uint32ToByte(source.transactionArgs.length)
        let result = BufferUtil.concat(code, argLen)
        source.transactionArgs.forEach(x => {
            const argData = this.transactionArgumentToByte(x)
            result = BufferUtil.concat(result, argData)
        })
        const moduleData = this.listByteArrayToByte(source.modules)
        result = BufferUtil.concat(result, moduleData)
        return result
    }

    static transactionPayloadToByte(source: TransactionPayloadLCS): Uint8Array {
        const code = this.uint32ToByte(source.payloadType)
        if(source.payloadType === TransactionPayloadType.Program) {
            const data = this.programToByte(source.program)
            return BufferUtil.concat(code, data)
        }
        return new Uint8Array()
    }

    static rawTransactionToByte(source: RawTransactionLCS): Uint8Array {
        const sender = this.addressToByte(source.sender)
        const sequence = this.uint64ToByte(source.sequenceNumber)
        let result = BufferUtil.concat(sender, sequence)
        const payload = this.transactionPayloadToByte(source.payload)
        result = BufferUtil.concat(result, payload)
        const maxGasAmount = this.uint64ToByte(source.maxGasAmount)
        result = BufferUtil.concat(result, maxGasAmount)
        const gas = this.uint64ToByte(source.gasUnitPrice)
        result = BufferUtil.concat(result, gas)
        const expire = this.uint64ToByte(source.expirtationTime)
        result = BufferUtil.concat(result, expire)
        return result
    }

    static listByteArrayToByte(sources: Uint8Array[]): Uint8Array {
        const len = this.uint32ToByte(sources.length)
        let result = BufferUtil.concat(len, new Uint8Array())
        sources.forEach(x => {
            const len = this.uint32ToByte(x.length)
            result = BufferUtil.concat(result, len)
            result = BufferUtil.concat(result, x)
        })
        return result
    }

    static byteArrayToByte(source:Uint8Array): Uint8Array {
        const len = this.uint32ToByte(source.length)
        return BufferUtil.concat(len, source)
    }

    static stringToByte(source:string): Uint8Array {
        const len = this.uint32ToByte(source.length)
        let buffer = new ArrayBuffer(source.length)
        let view = new DataView(buffer)
        for(let i=0; i< source.length; i++) {
            view.setUint8(i,source.charCodeAt(i))
        }
        return BufferUtil.concat(len, new Uint8Array(buffer))
    }

    static uint32ToByte(source:number): Uint8Array {
        let buffer = new ArrayBuffer(4)
        let view = new DataView(buffer)
        view.setUint32(0, source, true)
        return new Uint8Array(buffer)
    }

    static uint64ToByte(source:BigNumber): Uint8Array {
        let u64 = new Uint64LE(source.toString())
        let buffer = u64.toArrayBuffer()
        return new Uint8Array(buffer)
    }
}