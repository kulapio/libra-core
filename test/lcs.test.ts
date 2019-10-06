import {LCSSerialization} from '../lib/lcs/serialization'
import {AddressLCS} from '../lib/lcs/types/AddressLCS'
import {Buffer} from 'safe-buffer'
import { TransactionArgumentLCS } from '../lib/lcs/types/TransactionArgumentLCS';
import { ProgramLCS } from '../lib/lcs/types/ProgramLCS';

describe('LCS', () => {
    beforeAll(() => {

    })
  
    it('should serialize AccountAddress correctly', () => {
        const expected = '20000000CA820BF9305EB97D0D784F71B3955457FBF6911F5300CEAA5D7E8621529EAE19'.toLowerCase()
        const address = new AddressLCS('CA820BF9305EB97D0D784F71B3955457FBF6911F5300CEAA5D7E8621529EAE19')
        const actual = LCSSerialization.addressToByte(address)
        expect(actual.toString()).toBe(expected)
    });

    it('should serialize TransactionArgumentU64 correctly', () => {
        const expected = '000000007CC9BDA45089DD7F'.toLowerCase()
        const arg = TransactionArgumentLCS.fromU64('9213671392124193148')
        const actual = LCSSerialization.transactionArgumentToByte(arg)
        expect(actual.toString()).toBe(expected)
    });

    it('should serialize TransactionArgumentAddress correctly', () => {
        const expected = '01000000200000002C25991785343B23AE073A50E5FD809A2CD867526B3C1DB2B0BF5D1924C693ED'.toLowerCase()
        const arg = TransactionArgumentLCS.fromAddress(new AddressLCS('2c25991785343b23ae073a50e5fd809a2cd867526b3c1db2b0bf5d1924c693ed'))
        const actual = LCSSerialization.transactionArgumentToByte(arg)
        expect(actual.toString()).toBe(expected)
    });

    it('should serialize TransactionArgumentString correctly', () => {
        const expected = '020000000D00000048656C6C6F2C20576F726C6421'.toLowerCase()
        const arg = TransactionArgumentLCS.fromString('Hello, World!')
        const actual = LCSSerialization.transactionArgumentToByte(arg)
        expect(actual.toString()).toBe(expected)
    });

    it('should serialize Program correctly', () => {
        const expected = '040000006D6F766502000000020000000900000043414645204430304402000000090000006361666520643030640300000001000000CA02000000FED0010000000D'.toLowerCase()
        let prog = new ProgramLCS()
        prog.setCode('move')
        prog.addTransactionArg(TransactionArgumentLCS.fromString('CAFE D00D'))
        prog.addTransactionArg(TransactionArgumentLCS.fromString('cafe d00d'))
        prog.addModule('CA')
        prog.addModule('FED0')
        prog.addModule('0D')
        const actual = LCSSerialization.programToByte(prog)
        expect(actual.toString()).toBe(expected)
        console.log(prog.toString())
    });


});
  