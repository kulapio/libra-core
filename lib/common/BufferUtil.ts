import { stringLiteral } from "@babel/types"
import { Buffer } from "buffer"

export class BufferUtil {
    public static fromHex(source: string): Uint8Array {
        const data = source.match(/.{1,2}/g)!.map(x => parseInt(x, 16))
        return new Uint8Array(data)
    }

    public static fromBase64(source: string): Uint8Array {
      return Uint8Array.from(Buffer.from(source, 'base64'))
    }

    public static fromString(source: string): Uint8Array {
        const buffer = new ArrayBuffer(source.length)
        const view = new DataView(buffer)
        for(let i=0; i< source.length; i++) {
            view.setUint8(i,source.charCodeAt(i))
        }
        return new Uint8Array(buffer)
    }

    public static toString(source: Uint8Array): string {
        const data: string[] = []
        source.forEach( x => {
            data.push(String.fromCharCode(x))
        })
        return data.join('')
    }

    public static toHex(sources:Uint8Array): string {
        const data:string[] = []
        sources.forEach(x => {
            data.push(x.toString(16).padStart(2, '0'))
        })
        return data.join('')
    }

    public static toBase64(sources:Uint8Array): string {
        return Buffer.from(sources).toString('base64')
    }

    public static concat(a:Uint8Array, b:Uint8Array): Uint8Array {
        const c = new Uint8Array(a.length + b.length)
        c.set(a)
        c.set(b, a.length)
        return c
    }
}