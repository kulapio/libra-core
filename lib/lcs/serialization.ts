import BigNumber from 'bignumber.js'
import { Uint64LE } from 'int64-buffer'
import { TransactionArgument } from '../__generated__/transaction_pb'
import {BufferUtil} from '../common/BufferUtil'
import {AddressLCS} from './types/AddressLCS'
import {ProgramLCS} from './types/ProgramLCS'
import { RawTransactionLCS } from './types/RawTransactionLCS'
import {TransactionArgumentLCS} from './types/TransactionArgumentLCS'
import { TransactionPayloadLCS, TransactionPayloadType } from './types/TransactionPayloadLCS'

export class LCSSerialization {

    public static addressToByte(source:AddressLCS): Uint8Array {
        return BufferUtil.fromHex(source.value)
    }

    public static transactionArgumentToByte(source:TransactionArgumentLCS): Uint8Array {
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

    public static programToByte(source: ProgramLCS): Uint8Array {
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

    public static transactionPayloadToByte(source: TransactionPayloadLCS): Uint8Array {
        const code = this.uint32ToByte(source.payloadType)
        if(source.payloadType === TransactionPayloadType.Program) {
            const data = this.programToByte(source.program)
            return BufferUtil.concat(code, data)
        }
        return new Uint8Array()
    }

    public static rawTransactionToByte(source: RawTransactionLCS): Uint8Array {
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

    public static listByteArrayToByte(sources: Uint8Array[]): Uint8Array {
        const len = this.uint32ToByte(sources.length)
        let result = BufferUtil.concat(len, new Uint8Array())
        sources.forEach(source => {
            const sourceLen = this.uint32ToByte(source.length)
            result = BufferUtil.concat(result, sourceLen)
            result = BufferUtil.concat(result, source)
        })
        return result
    }

    public static byteArrayToByte(source:Uint8Array): Uint8Array {
        const len = this.uint32ToByte(source.length)
        return BufferUtil.concat(len, source)
    }

    public static stringToByte(source:string): Uint8Array {
        const len = this.uint32ToByte(source.length)
        const buffer = new ArrayBuffer(source.length)
        const view = new DataView(buffer)
        for(let i=0; i< source.length; i++) {
            view.setUint8(i,source.charCodeAt(i))
        }
        return BufferUtil.concat(len, new Uint8Array(buffer))
    }

    public static uint32ToByte(source:number): Uint8Array {
        const buffer = new ArrayBuffer(4)
        const view = new DataView(buffer)
        view.setUint32(0, source, true)
        return new Uint8Array(buffer)
    }

    public static uint64ToByte(source:BigNumber): Uint8Array {
        const u64 = new Uint64LE(source.toString())
        const buffer = u64.toArrayBuffer()
        return new Uint8Array(buffer)
    }
}