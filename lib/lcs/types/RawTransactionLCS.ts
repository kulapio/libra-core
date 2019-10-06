import BigNumber from "bignumber.js";
import { AddressLCS } from "./AddressLCS";
import { TransactionPayloadLCS } from "./TransactionPayloadLCS";

export class RawTransactionLCS {
    maxGasAmount: BigNumber
    gasUnitPrice: BigNumber
    expirtationTime: BigNumber
    sender: AddressLCS
    sequenceNumber: BigNumber
    payload: TransactionPayloadLCS

    constructor(sender: string, sequence:string, payload: TransactionPayloadLCS) {
        this.maxGasAmount = new BigNumber(1000000)
        this.gasUnitPrice = new BigNumber(0)
        this.expirtationTime = new BigNumber(Math.floor(new Date().getTime() / 1000) + 100)
        this.sender = new AddressLCS(sender)
        this.sequenceNumber = new BigNumber(sequence)
        this.payload = payload
    }

    // @TODO finish tostring method
    toString():string {
        return ''
    }
}