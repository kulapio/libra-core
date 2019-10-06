export class AddressLCS {
    value: string
    length: number

    constructor(address: string){
        this.value = address.toLowerCase()
        this.length = 32
    }

    toString():string {
        return this.value
    }
}