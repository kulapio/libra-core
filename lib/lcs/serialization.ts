import {AddressLCS} from './types/AddressLCS'
import {ProgramLCS} from './types/ProgramLCS'
import {TransactionArgumentLCS} from './types/TransactionArgumentLCS'
import { Uint64LE } from 'int64-buffer'
import { TransactionArgument } from '../__generated__/transaction_pb'
import BigNumber from 'bignumber.js'
import { TransactionPayloadLCS, TransactionPayloadType } from './types/TransactionPayloadLCS'
import { RawTransactionLCS } from './types/RawTransactionLCS'

export class LCSSerialization {

    static addressToByte(source:AddressLCS): Uint8Array {
        const len = this.uint32ToByte(source.length)
        const data = this.hexToByte(source.value)
        return this.concat(len, data)
    }

    static transactionArgumentToByte(source:TransactionArgumentLCS): Uint8Array {
        const type = this.uint32ToByte(source.type)
        if(source.type === TransactionArgument.ArgType.ADDRESS) {
            const data = this.addressToByte(source.address)
            return this.concat(type, data)
        } else if(source.type === TransactionArgument.ArgType.U64) {
            const data = this.uint64ToByte(source.u64)
            return this.concat(type, data)
        } else if(source.type === TransactionArgument.ArgType.STRING) {
            const data = this.stringToByte(source.string)
            return this.concat(type, data)
        } else if(source.type === TransactionArgument.ArgType.BYTEARRAY) {
            const data = this.byteArrayToByte(source.byteArray)
            return this.concat(type, data)
        }
        return new Uint8Array()
    }

    static programToByte(source: ProgramLCS): Uint8Array {
        const code = this.byteArrayToByte(source.code)
        const argLen = this.uint32ToByte(source.transactionArgs.length)
        let result = this.concat(code, argLen)
        source.transactionArgs.forEach(x => {
            const argData = this.transactionArgumentToByte(x)
            result = this.concat(result, argData)
        })
        const moduleData = this.listByteArrayToByte(source.modules)
        result = this.concat(result, moduleData)
        return result
    }

    static transactionPayloadToByte(source: TransactionPayloadLCS): Uint8Array {
        const code = this.uint32ToByte(source.payloadType)
        if(source.payloadType === TransactionPayloadType.Program) {
            const data = this.programToByte(source.program)
            return this.concat(code, data)
        }
        return new Uint8Array()
    }

    static rawTransactionToByte(source: RawTransactionLCS): Uint8Array {
        const sender = this.addressToByte(source.sender)
        const sequence = this.uint64ToByte(source.sequenceNumber)
        let result = this.concat(sender, sequence)
        const payload = this.transactionPayloadToByte(source.payload)
        result = this.concat(result, payload)
        const maxGasAmount = this.uint64ToByte(source.maxGasAmount)
        result = this.concat(result, maxGasAmount)
        const gas = this.uint64ToByte(source.gasUnitPrice)
        result = this.concat(result, gas)
        const expire = this.uint64ToByte(source.expirtationTime)
        result = this.concat(result, expire)
        return result
    }

    static listByteArrayToByte(sources: Uint8Array[]): Uint8Array {
        const len = this.uint32ToByte(sources.length)
        let result = this.concat(len, new Uint8Array())
        sources.forEach(x => {
            const len = this.uint32ToByte(x.length)
            result = this.concat(result, len)
            result = this.concat(result, x)
        })
        return result
    }

    static byteArrayToByte(source:Uint8Array): Uint8Array {
        const len = this.uint32ToByte(source.length)
        return this.concat(len, source)
    }

    static stringToByte(source:string): Uint8Array {
        const len = this.uint32ToByte(source.length)
        let buffer = new ArrayBuffer(source.length)
        let view = new DataView(buffer)
        for(let i=0; i< source.length; i++) {
            view.setUint8(i,source.charCodeAt(i))
        }
        return this.concat(len, new Uint8Array(buffer))
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

    /*** test */
    
    static hexToByte(source: string): Uint8Array {
        let data = source.match(/.{1,2}/g)!.map(x => parseInt(x, 16))
        return new Uint8Array(data)
    }

    static base64ToByte(source: string): Uint8Array {
        return Uint8Array.from(atob(source), c => c.charCodeAt(0))
    }

    static toHexString(sources:Uint8Array): string {
        let data:string[] = []
        sources.forEach(x => {
            data.push(x.toString(16).padStart(2, '0'))
        })
        return data.join('')
    }

    static concat(a:Uint8Array, b:Uint8Array): Uint8Array {
        let c = new Uint8Array(a.length + b.length)
        c.set(a)
        c.set(b, a.length)
        return c
    }
}