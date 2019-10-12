import {LCSSerialization} from '../lib/lcs/serialization'
import {LCSDeserialization} from '../lib/lcs/deserialization'
import {AddressLCS} from '../lib/lcs/types/AddressLCS'
import {BufferUtil} from '../lib/common/BufferUtil'
import { TransactionArgumentLCS } from '../lib/lcs/types/TransactionArgumentLCS'
import { TransactionPayloadLCS, TransactionPayloadType } from '../lib/lcs/types/TransactionPayloadLCS'
import { ProgramLCS } from '../lib/lcs/types/ProgramLCS';
import { RawTransactionLCS } from '../lib/lcs/types/RawTransactionLCS'
import BigNumber from 'bignumber.js'
import { CursorBuffer } from '../lib/common/CursorBuffer'

describe('LCS', () => {
    beforeAll(() => {

    })

    it('should serialize u32int correctly', () => {
        const expected = '20000000'.toLowerCase()
        const actual = LCSSerialization.uint32ToByte(32)
        expect(BufferUtil.toHex(actual)).toBe(expected)
    });
  
    it('should serialize AccountAddress correctly', () => {
        const expected = '20000000CA820BF9305EB97D0D784F71B3955457FBF6911F5300CEAA5D7E8621529EAE19'.toLowerCase()
        const address = new AddressLCS('CA820BF9305EB97D0D784F71B3955457FBF6911F5300CEAA5D7E8621529EAE19')
        const actual = LCSSerialization.addressToByte(address)
        expect(BufferUtil.toHex(actual)).toBe(expected)
    });

    it('should serialize TransactionArgumentU64 correctly', () => {
        const expected = '000000007CC9BDA45089DD7F'.toLowerCase()
        const arg = TransactionArgumentLCS.fromU64('9213671392124193148')
        const actual = LCSSerialization.transactionArgumentToByte(arg)
        expect(BufferUtil.toHex(actual)).toBe(expected)
    });

    it('should serialize TransactionArgumentAddress correctly', () => {
        const expected = '01000000200000002C25991785343B23AE073A50E5FD809A2CD867526B3C1DB2B0BF5D1924C693ED'.toLowerCase()
        const arg = TransactionArgumentLCS.fromAddress(new AddressLCS('2c25991785343b23ae073a50e5fd809a2cd867526b3c1db2b0bf5d1924c693ed'))
        const actual = LCSSerialization.transactionArgumentToByte(arg)
        expect(BufferUtil.toHex(actual)).toBe(expected)
    });

    it('should serialize TransactionArgumentString correctly', () => {
        const expected = '020000000D00000048656C6C6F2C20576F726C6421'.toLowerCase()
        const arg = TransactionArgumentLCS.fromString('Hello, World!')
        const actual = LCSSerialization.transactionArgumentToByte(arg)
        expect(BufferUtil.toHex(actual)).toBe(expected)
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
        expect(BufferUtil.toHex(actual)).toBe(expected)
    });
    
    it('should serialize TransactionPayloadWithProgram correctly', () => {
        const expected = '00000000040000006D6F766502000000020000000900000043414645204430304402000000090000006361666520643030640300000001000000CA02000000FED0010000000D'.toLowerCase()
        let prog = new ProgramLCS()
        prog.setCode('move')
        prog.addTransactionArg(TransactionArgumentLCS.fromString('CAFE D00D'))
        prog.addTransactionArg(TransactionArgumentLCS.fromString('cafe d00d'))
        prog.addModule('CA')
        prog.addModule('FED0')
        prog.addModule('0D')
        const payload = TransactionPayloadLCS.fromProgram(prog)
        const actual = LCSSerialization.transactionPayloadToByte(payload)
        expect(BufferUtil.toHex(actual)).toBe(expected)
    });

    it('should serialize RawTransactionWithProgram correctly', () => {
        const expected = '200000003A24A61E05D129CACE9E0EFC8BC9E33831FEC9A9BE66F50FD352A2638A49B9EE200000000000000000000000040000006D6F766502000000020000000900000043414645204430304402000000090000006361666520643030640300000001000000CA02000000FED0010000000D1027000000000000204E0000000000008051010000000000'.toLowerCase()
        let prog = new ProgramLCS()
        prog.setCode('move')
        prog.addTransactionArg(TransactionArgumentLCS.fromString('CAFE D00D'))
        prog.addTransactionArg(TransactionArgumentLCS.fromString('cafe d00d'))
        prog.addModule('CA')
        prog.addModule('FED0')
        prog.addModule('0D')
        let payload = TransactionPayloadLCS.fromProgram(prog)
        let transaction = new RawTransactionLCS('3a24a61e05d129cace9e0efc8bc9e33831fec9a9be66f50fd352a2638a49b9ee', '32', payload)
        transaction.maxGasAmount = new BigNumber(10000)
        transaction.gasUnitPrice = new BigNumber(20000)
        transaction.expirtationTime = new BigNumber(86400)
        const actual = LCSSerialization.rawTransactionToByte(transaction)
        expect(BufferUtil.toHex(actual)).toBe(expected)
    });

    it('should deserialize address correctly', () => {
        const expected = 'CA820BF9305EB97D0D784F71B3955457FBF6911F5300CEAA5D7E8621529EAE19'.toLowerCase()
        const source = '20000000CA820BF9305EB97D0D784F71B3955457FBF6911F5300CEAA5D7E8621529EAE19'.toLowerCase()
        let cursor = new CursorBuffer(BufferUtil.fromHex(source))
        const actual = LCSDeserialization.getAddress(cursor)
        expect(actual.value.toLowerCase()).toBe(expected)
    });

    it('should deserialize TransactionArgumentString correctly', () => {
        const expected = 'Hello, World!'
        const source = '020000000D00000048656C6C6F2C20576F726C6421'.toLowerCase()
        let cursor = new CursorBuffer(BufferUtil.fromHex(source))
        const actual = LCSDeserialization.getTransactionArgument(cursor)
        expect(actual.string).toBe(expected)
    });
    
    it('should deserialize Program correctly', () => {
        const source = '040000006D6F766502000000020000000900000043414645204430304402000000090000006361666520643030640300000001000000CA02000000FED0010000000D'.toLowerCase()
        let cursor = new CursorBuffer(BufferUtil.fromHex(source))
        const actual = LCSDeserialization.getProgram(cursor)
        expect(BufferUtil.toString(actual.code)).toBe('move')
        expect(actual.transactionArgs.length).toBe(2)
        expect(actual.transactionArgs[0].string).toBe('CAFE D00D')
        expect(actual.modules.length).toBe(3)
        expect(BufferUtil.toHex(actual.modules[1])).toBe('FED0'.toLowerCase())
    });

    it('should deserialize TransactionPayloadWithProgram correctly', () => {
        const source = '00000000040000006D6F766502000000020000000900000043414645204430304402000000090000006361666520643030640300000001000000CA02000000FED0010000000D'.toLowerCase()
        let cursor = new CursorBuffer(BufferUtil.fromHex(source))
        const actual = LCSDeserialization.getTransactionPayload(cursor)
        expect(actual.payloadType).toBe(TransactionPayloadType.Program)
        expect(BufferUtil.toString(actual.program.code)).toBe('move')
        expect(actual.program.transactionArgs.length).toBe(2)
        expect(actual.program.transactionArgs[0].string).toBe('CAFE D00D')
        expect(actual.program.modules.length).toBe(3)
        expect(BufferUtil.toHex(actual.program.modules[1])).toBe('FED0'.toLowerCase())
    });
});
  