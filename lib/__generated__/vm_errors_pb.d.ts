import * as jspb from "google-protobuf"

import * as language_storage_pb from './language_storage_pb';

export class VMValidationStatus extends jspb.Message {
  getCode(): VMValidationStatusCode;
  setCode(value: VMValidationStatusCode): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMValidationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VMValidationStatus): VMValidationStatus.AsObject;
  static serializeBinaryToWriter(message: VMValidationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMValidationStatus;
  static deserializeBinaryFromReader(message: VMValidationStatus, reader: jspb.BinaryReader): VMValidationStatus;
}

export namespace VMValidationStatus {
  export type AsObject = {
    code: VMValidationStatusCode,
    message: string,
  }
}

export class VMVerificationStatusList extends jspb.Message {
  getStatusListList(): Array<VMVerificationStatus>;
  setStatusListList(value: Array<VMVerificationStatus>): void;
  clearStatusListList(): void;
  addStatusList(value?: VMVerificationStatus, index?: number): VMVerificationStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMVerificationStatusList.AsObject;
  static toObject(includeInstance: boolean, msg: VMVerificationStatusList): VMVerificationStatusList.AsObject;
  static serializeBinaryToWriter(message: VMVerificationStatusList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMVerificationStatusList;
  static deserializeBinaryFromReader(message: VMVerificationStatusList, reader: jspb.BinaryReader): VMVerificationStatusList;
}

export namespace VMVerificationStatusList {
  export type AsObject = {
    statusListList: Array<VMVerificationStatus.AsObject>,
  }
}

export class VMVerificationStatus extends jspb.Message {
  getStatusKind(): VMVerificationStatus.StatusKind;
  setStatusKind(value: VMVerificationStatus.StatusKind): void;

  getModuleIdx(): number;
  setModuleIdx(value: number): void;

  getErrorKind(): VMVerificationErrorKind;
  setErrorKind(value: VMVerificationErrorKind): void;

  getMessage(): string;
  setMessage(value: string): void;

  getDependencyId(): language_storage_pb.ModuleId | undefined;
  setDependencyId(value?: language_storage_pb.ModuleId): void;
  hasDependencyId(): boolean;
  clearDependencyId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMVerificationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VMVerificationStatus): VMVerificationStatus.AsObject;
  static serializeBinaryToWriter(message: VMVerificationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMVerificationStatus;
  static deserializeBinaryFromReader(message: VMVerificationStatus, reader: jspb.BinaryReader): VMVerificationStatus;
}

export namespace VMVerificationStatus {
  export type AsObject = {
    statusKind: VMVerificationStatus.StatusKind,
    moduleIdx: number,
    errorKind: VMVerificationErrorKind,
    message: string,
    dependencyId?: language_storage_pb.ModuleId.AsObject,
  }

  export enum StatusKind { 
    SCRIPT = 0,
    MODULE = 1,
    DEPENDENCY = 2,
  }
}

export class Aborted extends jspb.Message {
  getAbortedErrorCode(): number;
  setAbortedErrorCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Aborted.AsObject;
  static toObject(includeInstance: boolean, msg: Aborted): Aborted.AsObject;
  static serializeBinaryToWriter(message: Aborted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Aborted;
  static deserializeBinaryFromReader(message: Aborted, reader: jspb.BinaryReader): Aborted;
}

export namespace Aborted {
  export type AsObject = {
    abortedErrorCode: number,
  }
}

export class ArithmeticError extends jspb.Message {
  getErrorCode(): ArithmeticError.ArithmeticErrorType;
  setErrorCode(value: ArithmeticError.ArithmeticErrorType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArithmeticError.AsObject;
  static toObject(includeInstance: boolean, msg: ArithmeticError): ArithmeticError.AsObject;
  static serializeBinaryToWriter(message: ArithmeticError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArithmeticError;
  static deserializeBinaryFromReader(message: ArithmeticError, reader: jspb.BinaryReader): ArithmeticError;
}

export namespace ArithmeticError {
  export type AsObject = {
    errorCode: ArithmeticError.ArithmeticErrorType,
  }

  export enum ArithmeticErrorType { 
    UNKNOWNARITHMETICERROR = 0,
    UNDERFLOW = 1,
    OVERFLOW = 2,
    DIVISIONBYZERO = 3,
  }
}

export class DynamicReferenceError extends jspb.Message {
  getErrorCode(): DynamicReferenceError.DynamicReferenceErrorType;
  setErrorCode(value: DynamicReferenceError.DynamicReferenceErrorType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicReferenceError.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicReferenceError): DynamicReferenceError.AsObject;
  static serializeBinaryToWriter(message: DynamicReferenceError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicReferenceError;
  static deserializeBinaryFromReader(message: DynamicReferenceError, reader: jspb.BinaryReader): DynamicReferenceError;
}

export namespace DynamicReferenceError {
  export type AsObject = {
    errorCode: DynamicReferenceError.DynamicReferenceErrorType,
  }

  export enum DynamicReferenceErrorType { 
    UNKNOWNDYNAMICREFERENCEERROR = 0,
    MOVEOFBORROWEDRESOURCE = 1,
    GLOBALREFALREADYRELEASED = 2,
    MISSINGRELEASEREF = 3,
    GLOBALALREADYBORROWED = 4,
  }
}

export class ExecutionStatus extends jspb.Message {
  getRuntimeStatus(): RuntimeStatus;
  setRuntimeStatus(value: RuntimeStatus): void;

  getAborted(): Aborted | undefined;
  setAborted(value?: Aborted): void;
  hasAborted(): boolean;
  clearAborted(): void;

  getArithmeticError(): ArithmeticError | undefined;
  setArithmeticError(value?: ArithmeticError): void;
  hasArithmeticError(): boolean;
  clearArithmeticError(): void;

  getReferenceError(): DynamicReferenceError | undefined;
  setReferenceError(value?: DynamicReferenceError): void;
  hasReferenceError(): boolean;
  clearReferenceError(): void;

  getExecutionStatusCase(): ExecutionStatus.ExecutionStatusCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionStatus): ExecutionStatus.AsObject;
  static serializeBinaryToWriter(message: ExecutionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionStatus;
  static deserializeBinaryFromReader(message: ExecutionStatus, reader: jspb.BinaryReader): ExecutionStatus;
}

export namespace ExecutionStatus {
  export type AsObject = {
    runtimeStatus: RuntimeStatus,
    aborted?: Aborted.AsObject,
    arithmeticError?: ArithmeticError.AsObject,
    referenceError?: DynamicReferenceError.AsObject,
  }

  export enum ExecutionStatusCase { 
    EXECUTION_STATUS_NOT_SET = 0,
    RUNTIME_STATUS = 1,
    ABORTED = 2,
    ARITHMETIC_ERROR = 3,
    REFERENCE_ERROR = 4,
  }
}

export class VMStatus extends jspb.Message {
  getValidation(): VMValidationStatus | undefined;
  setValidation(value?: VMValidationStatus): void;
  hasValidation(): boolean;
  clearValidation(): void;

  getVerification(): VMVerificationStatusList | undefined;
  setVerification(value?: VMVerificationStatusList): void;
  hasVerification(): boolean;
  clearVerification(): void;

  getInvariantViolation(): VMInvariantViolationError;
  setInvariantViolation(value: VMInvariantViolationError): void;

  getDeserialization(): BinaryError;
  setDeserialization(value: BinaryError): void;

  getExecution(): ExecutionStatus | undefined;
  setExecution(value?: ExecutionStatus): void;
  hasExecution(): boolean;
  clearExecution(): void;

  getErrorTypeCase(): VMStatus.ErrorTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VMStatus): VMStatus.AsObject;
  static serializeBinaryToWriter(message: VMStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMStatus;
  static deserializeBinaryFromReader(message: VMStatus, reader: jspb.BinaryReader): VMStatus;
}

export namespace VMStatus {
  export type AsObject = {
    validation?: VMValidationStatus.AsObject,
    verification?: VMVerificationStatusList.AsObject,
    invariantViolation: VMInvariantViolationError,
    deserialization: BinaryError,
    execution?: ExecutionStatus.AsObject,
  }

  export enum ErrorTypeCase { 
    ERROR_TYPE_NOT_SET = 0,
    VALIDATION = 1,
    VERIFICATION = 2,
    INVARIANT_VIOLATION = 3,
    DESERIALIZATION = 4,
    EXECUTION = 5,
  }
}

export enum VMValidationStatusCode { 
  UNKNOWNVALIDATIONSTATUS = 0,
  INVALIDSIGNATURE = 1,
  INVALIDAUTHKEY = 2,
  SEQUENCENUMBERTOOOLD = 3,
  SEQUENCENUMBERTOONEW = 4,
  INSUFFICIENTBALANCEFORTRANSACTIONFEE = 5,
  TRANSACTIONEXPIRED = 6,
  SENDINGACCOUNTDOESNOTEXIST = 7,
  REJECTEDWRITESET = 8,
  INVALIDWRITESET = 9,
  EXCEEDEDMAXTRANSACTIONSIZE = 10,
  UNKNOWNSCRIPT = 11,
  UNKNOWNMODULE = 12,
  MAXGASUNITSEXCEEDSMAXGASUNITSBOUND = 13,
  MAXGASUNITSBELOWMINTRANSACTIONGASUNITS = 14,
  GASUNITPRICEBELOWMINBOUND = 15,
  GASUNITPRICEABOVEMAXBOUND = 16,
}
export enum VMVerificationErrorKind { 
  UNKNOWNVERIFICATIONERROR = 0,
  INDEXOUTOFBOUNDS = 1,
  RANGEOUTOFBOUNDS = 2,
  INVALIDSIGNATURETOKEN = 3,
  INVALIDFIELDDEFREFERENCE = 4,
  RECURSIVESTRUCTDEFINITION = 5,
  INVALIDRESOURCEFIELD = 6,
  INVALIDFALLTHROUGH = 7,
  JOINFAILURE = 8,
  NEGATIVESTACKSIZEWITHINBLOCK = 9,
  UNBALANCEDSTACK = 10,
  INVALIDMAINFUNCTIONSIGNATURE = 11,
  DUPLICATEELEMENT = 12,
  INVALIDMODULEHANDLE = 13,
  UNIMPLEMENTEDHANDLE = 14,
  INCONSISTENTFIELDS = 15,
  UNUSEDFIELDS = 16,
  LOOKUPFAILED = 17,
  VISIBILITYMISMATCH = 18,
  TYPERESOLUTIONFAILURE = 19,
  TYPEMISMATCH = 20,
  MISSINGDEPENDENCY = 21,
  POPREFERENCEERROR = 22,
  POPRESOURCEERROR = 23,
  RELEASEREFTYPEMISMATCHERROR = 24,
  BRTYPEMISMATCHERROR = 25,
  ABORTTYPEMISMATCHERROR = 26,
  STLOCTYPEMISMATCHERROR = 27,
  STLOCUNSAFETODESTROYERROR = 28,
  RETUNSAFETODESTROYERROR = 29,
  RETTYPEMISMATCHERROR = 30,
  FREEZEREFTYPEMISMATCHERROR = 31,
  FREEZEREFEXISTSMUTABLEBORROWERROR = 32,
  BORROWFIELDTYPEMISMATCHERROR = 33,
  BORROWFIELDBADFIELDERROR = 34,
  BORROWFIELDEXISTSMUTABLEBORROWERROR = 35,
  COPYLOCUNAVAILABLEERROR = 36,
  COPYLOCRESOURCEERROR = 37,
  COPYLOCEXISTSBORROWERROR = 38,
  MOVELOCUNAVAILABLEERROR = 39,
  MOVELOCEXISTSBORROWERROR = 40,
  BORROWLOCREFERENCEERROR = 41,
  BORROWLOCUNAVAILABLEERROR = 42,
  BORROWLOCEXISTSBORROWERROR = 43,
  CALLTYPEMISMATCHERROR = 44,
  CALLBORROWEDMUTABLEREFERENCEERROR = 45,
  PACKTYPEMISMATCHERROR = 46,
  UNPACKTYPEMISMATCHERROR = 47,
  READREFTYPEMISMATCHERROR = 48,
  READREFRESOURCEERROR = 49,
  READREFEXISTSMUTABLEBORROWERROR = 50,
  WRITEREFTYPEMISMATCHERROR = 51,
  WRITEREFRESOURCEERROR = 52,
  WRITEREFEXISTSBORROWERROR = 53,
  WRITEREFNOMUTABLEREFERENCEERROR = 54,
  INTEGEROPTYPEMISMATCHERROR = 55,
  BOOLEANOPTYPEMISMATCHERROR = 56,
  EQUALITYOPTYPEMISMATCHERROR = 57,
  EXISTSRESOURCETYPEMISMATCHERROR = 58,
  BORROWGLOBALTYPEMISMATCHERROR = 59,
  BORROWGLOBALNORESOURCEERROR = 60,
  MOVEFROMTYPEMISMATCHERROR = 61,
  MOVEFROMNORESOURCEERROR = 62,
  MOVETOSENDERTYPEMISMATCHERROR = 63,
  MOVETOSENDERNORESOURCEERROR = 64,
  CREATEACCOUNTTYPEMISMATCHERROR = 65,
  MODULEADDRESSDOESNOTMATCHSENDER = 66,
  NOMODULEHANDLES = 67,
}
export enum VMInvariantViolationError { 
  UNKNOWNINVARIANTVIOLATIONERROR = 0,
  OUTOFBOUNDSINDEX = 1,
  OUTOFBOUNDSRANGE = 2,
  EMPTYVALUESTACK = 3,
  EMPTYCALLSTACK = 4,
  PCOVERFLOW = 5,
  LINKERERROR = 6,
  LOCALREFERENCEERROR = 7,
  STORAGEERROR = 8,
  INTERNALTYPEERROR = 9,
}
export enum BinaryError { 
  UNKNOWNBINARYERROR = 0,
  MALFORMED = 1,
  BADMAGIC = 2,
  UNKNOWNVERSION = 3,
  UNKNOWNTABLETYPE = 4,
  UNKNOWNSIGNATURETYPE = 5,
  UNKNOWNSERIALIZEDTYPE = 6,
  UNKNOWNOPCODE = 7,
  BADHEADERTABLE = 8,
  UNEXPECTEDSIGNATURETYPE = 9,
  DUPLICATETABLE = 10,
}
export enum RuntimeStatus { 
  UNKNOWNRUNTIMESTATUS = 0,
  EXECUTED = 1,
  OUTOFGAS = 2,
  RESOURCEDOESNOTEXIST = 3,
  RESOURCEALREADYEXISTS = 4,
  EVICTEDACCOUNTACCESS = 5,
  ACCOUNTADDRESSALREADYEXISTS = 6,
  TYPEERROR = 7,
  MISSINGDATA = 8,
  DATAFORMATERROR = 9,
  INVALIDDATA = 10,
  REMOTEDATAERROR = 11,
  CANNOTWRITEEXISTINGRESOURCE = 12,
  VALUESERIALIZATIONERROR = 13,
  VALUEDESERIALIZATIONERROR = 14,
  DUPLICATEMODULENAME = 15,
}
