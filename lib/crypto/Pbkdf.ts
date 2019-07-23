import crypto from 'crypto'
import { HmacUtils } from "./HmacUtils";

export class Pbkdf {
  private readonly digestAlgorithm: string;
  constructor(digestAlgorithm: string) {
    this.digestAlgorithm = digestAlgorithm;
  }

  public extract(password: Uint8Array, salt: string, iterations: number, outputLen: number) {
    return new Uint8Array(crypto.pbkdf2Sync(Buffer.from(password), salt, iterations, outputLen, this.digestAlgorithm));
  }

  public sha3256Pbkdf2(password: Buffer, salt: Buffer, iterations: number, outputLen: number) {
    const hmacLength = 32;
    const outputBuffer = Buffer.alloc(outputLen);
    const hmacOutput = Buffer.alloc(hmacLength);
    const block = Buffer.alloc(salt.length + 4);
    const leftLength = Math.ceil(outputLen / hmacLength);
    const rightLength = outputLen - (leftLength - 1) * hmacLength;
    salt.copy(block, 0, 0, salt.length);
    for (let i = 1; i <= leftLength; i++) {
      block.writeUInt32BE(i, salt.length);
      let hmac = Buffer.from(HmacUtils.digestSha3256Hmac(password, block))
      hmac.copy(hmacOutput, 0, 0, hmacLength);
      for (let j = 1; j < iterations; j++) {
        hmac = Buffer.from(HmacUtils.digestSha3256Hmac(password, hmac))
        for (let k = 0; k < hmacLength; k++) {
          // tslint:disable-next-line:no-bitwise
          hmacOutput[k] ^= hmac[k];
        }
      }
      const destPos = (i - 1) * hmacLength;
      const len = i === leftLength ? rightLength : hmacLength;
      hmacOutput.copy(outputBuffer, destPos, 0, len);
    }
    return outputBuffer;
  }
}
