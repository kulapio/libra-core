/* tslint:disable */
import {HmacUtils} from "./HmacUtils";

const hkdf = require('futoin-hkdf');
/* tslint:enable */
type BuffString = Buffer | string;

// Todo: Update implementation to work not only with Node
export class Hkdf {
  private hashAlgorithm: string;

  constructor(hashAlgorithm: string) {
    this.hashAlgorithm = hashAlgorithm;
  }

  public extract(ikm: Uint8Array, salt: string): Uint8Array {
    const ikmBuffer = Buffer.from(ikm);
    const prk = this.hashAlgorithm.toLowerCase() === 'sha3-256'
        ? this.sha3_256Extract(ikmBuffer, salt)
        : hkdf.extract(this.hashAlgorithm, this.hashLength, ikmBuffer, salt)
    return new Uint8Array(prk);
  }

  public expand(prk: Uint8Array, info: BuffString, outputLen: number): Uint8Array {
    const prkBuffer = Buffer.from(prk);
    const okm = this.hashAlgorithm.toLowerCase() === 'sha3-256'
        ? this.sha3_256Expand(prkBuffer, outputLen, info)
        : hkdf.expand(this.hashAlgorithm, this.hashLength, prkBuffer, outputLen, info)
    return new Uint8Array(okm);
  }

  public sha3_256Extract(ikm: BuffString, salt: BuffString): Buffer {
    const bIkm = Buffer.isBuffer(ikm) ? ikm : Buffer.from(ikm)
    const bSalt = Buffer.isBuffer(salt) ? salt : Buffer.from(salt)
    return Buffer.from(HmacUtils.digestSha3256Hmac(bSalt, bIkm))
  }

  public sha3_256Expand(prk: BuffString, length: number, info: BuffString): Buffer{
    const bInfo = Buffer.isBuffer(info) ? info : Buffer.from(info || '')
    const bPrk = Buffer.isBuffer(prk) ? prk : Buffer.from(prk);
    const infoLen = bInfo.length
    const hashLen = 32
    const steps = Math.ceil(length / hashLen)
    if (steps > 0xFF) {
      throw new Error( `OKM length ${length} is too long for sha3-256 hash` )
    }
    // use single buffer with unnecessary create/copy/move operations
    const t = Buffer.alloc(hashLen * steps + infoLen + 1)
    for (let c = 1, start = 0, end = 0; c <= steps; ++c) {
      // add info
      bInfo.copy(t, end);
      // add counter
      t[end + infoLen] = c;
      Buffer.from(HmacUtils.digestSha3256Hmac(bPrk, t.slice(start, end + infoLen + 1)))
          .copy(t, end);
      start = end; // used for T(C-1) start
      end += hashLen; // used for T(C-1) end & overall end
    }
    return t.slice(0, length)
  };

  get hashLength(): number {
    return hkdf.hash_length(this.hashAlgorithm);
  }
}
