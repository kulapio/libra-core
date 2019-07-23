import * as grpcWeb from 'grpc-web';

import * as get_with_proof_pb from './get_with_proof_pb';
import * as mempool_status_pb from './mempool_status_pb';
import * as transaction_pb from './transaction_pb';
import * as vm_errors_pb from './vm_errors_pb';

import {
  SubmitTransactionRequest,
  SubmitTransactionResponse} from './admission_control_pb';

export class AdmissionControlClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  submitTransaction(
    request: SubmitTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SubmitTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<SubmitTransactionResponse>;

  updateToLatestLedger(
    request: get_with_proof_pb.UpdateToLatestLedgerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: get_with_proof_pb.UpdateToLatestLedgerResponse) => void
  ): grpcWeb.ClientReadableStream<get_with_proof_pb.UpdateToLatestLedgerResponse>;

}

export class AdmissionControlPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  submitTransaction(
    request: SubmitTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SubmitTransactionResponse>;

  updateToLatestLedger(
    request: get_with_proof_pb.UpdateToLatestLedgerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<get_with_proof_pb.UpdateToLatestLedgerResponse>;

}

