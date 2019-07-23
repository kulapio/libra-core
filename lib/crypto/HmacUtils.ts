import {sha3_256} from "js-sha3";

export class HmacUtils {
    public static digestSha3256Hmac(key: Buffer, data: Buffer){
        const blockSize = 136;
        const ipad = Buffer.allocUnsafe(blockSize)
        const opad = Buffer.allocUnsafe(blockSize)
        if(key.length > blockSize){
            key = Buffer.from(sha3_256.create().update(key).digest())
        }else if (key.length < blockSize) {
            key = Buffer.concat([key, Buffer.alloc(128)], blockSize)
        }
        for (let i = 0; i < blockSize; i++) {
            /* tslint:disable */
            ipad[i] = key[i] ^ 0x36
            opad[i] = key[i] ^ 0x5C
            /* tslint:disable */
        }
        return sha3_256.create()
            .update(opad)
            .update(sha3_256.create()
                .update(ipad)
                .update(data)
                .digest())
            .digest()
    }
}