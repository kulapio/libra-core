export class AddressLCS {
    public value: string
    public length: number

    constructor(address: string){
        this.value = address.toLowerCase()
        this.length = 32
    }

    public toString():string {
        return this.value
    }
}