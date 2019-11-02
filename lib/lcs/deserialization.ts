import { TransactionArgument } from "../__generated__/transaction_pb";
import { BufferUtil } from "../common/BufferUtil";
import { CursorBuffer } from "../common/CursorBuffer";
import { AddressLCS } from "./types/AddressLCS";
import { ProgramLCS } from "./types/ProgramLCS";
import { RawTransactionLCS } from "./types/RawTransactionLCS";
import { TransactionArgumentLCS } from "./types/TransactionArgumentLCS";
import { TransactionPayloadLCS, TransactionPayloadType } from "./types/TransactionPayloadLCS";

export class LCSDeserialization {
    public static getAddress(cursor: CursorBuffer): AddressLCS {
        const data = cursor.readXBytes(32)
        return new AddressLCS(BufferUtil.toHex(data))
    }

    public static getTransactionArgumentList(cursor: CursorBuffer): TransactionArgumentLCS[] {
        const argLen = cursor.read32()
        const transactionArgs: TransactionArgumentLCS[] = []
        for(let i = 0;i<argLen;i++) {
            transactionArgs.push(this.getTransactionArgument(cursor))
        }
        return transactionArgs
    }

    public static getTransactionArgument(cursor: CursorBuffer): TransactionArgumentLCS {
        const argType = cursor.read32()
        if(argType === TransactionArgument.ArgType.U64) {
            const data = cursor.read64()
            return TransactionArgumentLCS.fromU64(data.toString())
        } else if(argType === TransactionArgument.ArgType.ADDRESS) {
            const data = this.getAddress(cursor)
            return TransactionArgumentLCS.fromAddress(data)
        } else if(argType === TransactionArgument.ArgType.STRING) {
            const data = this.getString(cursor)
            return TransactionArgumentLCS.fromString(data)
        } else if(argType === TransactionArgument.ArgType.BYTEARRAY) {
            const data = this.getByteArray(cursor)
            return TransactionArgumentLCS.fromByteArray(data)
        }
        return new TransactionArgumentLCS()
    }

    public static getProgram(cursor: CursorBuffer): ProgramLCS {
        const code = this.getByteArray(cursor)
        const transactionArgs = this.getTransactionArgumentList(cursor)
        const modules = this.getListByteArray(cursor)
        const prog = new ProgramLCS()
        prog.setCodeFromBuffer(code)
        transactionArgs.forEach(arg => {
            prog.addTransactionArg(arg)
        })
        modules.forEach(mod => {
            prog.addModule(BufferUtil.toHex(mod))
        })
        return prog
    }

    public static getRawTransaction(cursor: CursorBuffer): RawTransactionLCS {
        const sender = this.getAddress(cursor)
        const sequence = cursor.read64()
        const payload = this.getTransactionPayload(cursor)
        const maxGasAmount = cursor.read64()
        const gasUnitPrice = cursor.read64()
        const expiryTime = cursor.read64()
        const transaction = new RawTransactionLCS(sender.value, sequence.toString(), payload)
        transaction.maxGasAmount = maxGasAmount
        transaction.gasUnitPrice = gasUnitPrice
        transaction.expirtationTime = expiryTime
        return transaction
    }

    public static getTransactionPayload(cursor: CursorBuffer): TransactionPayloadLCS {
        const payload = new TransactionPayloadLCS()
        payload.payloadType = cursor.read32()
        // now, only transaction with program payload is supported
        if(payload.payloadType === TransactionPayloadType.Program) {
            payload.program = this.getProgram(cursor)
            return payload
        }
        throw new Error('unsupported TransactionPayload type')
    }

    public static getListByteArray(cursor: CursorBuffer): Uint8Array[] {
        const len = cursor.read32()
        const byteList = []
        for(let i=0;i<len;i++) {
            byteList.push(this.getByteArray(cursor))
        }
        return byteList
    }

    public static getByteArray(cursor: CursorBuffer): Uint8Array {
        const len = cursor.read32()
        const data = cursor.readXBytes(len)
        return data
    }
    
    public static getString(cursor: CursorBuffer): string {
        const len = cursor.read32()
        const data = []
        for(let i=0;i<len;i++) {
            data.push(cursor.read8())
        }
        return String.fromCharCode.apply(null, data)
    }
}