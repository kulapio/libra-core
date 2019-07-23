import * as grpcWeb from 'grpc-web';

import * as transaction_pb from './transaction_pb';
import * as mempool_status_pb from './mempool_status_pb';

import {
  AddTransactionWithValidationRequest,
  AddTransactionWithValidationResponse,
  CommitTransactionsRequest,
  CommitTransactionsResponse,
  GetBlockRequest,
  GetBlockResponse,
  HealthCheckRequest,
  HealthCheckResponse} from './mempool_pb';

export class MempoolClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addTransactionWithValidation(
    request: AddTransactionWithValidationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: AddTransactionWithValidationResponse) => void
  ): grpcWeb.ClientReadableStream<AddTransactionWithValidationResponse>;

  getBlock(
    request: GetBlockRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetBlockResponse) => void
  ): grpcWeb.ClientReadableStream<GetBlockResponse>;

  commitTransactions(
    request: CommitTransactionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CommitTransactionsResponse) => void
  ): grpcWeb.ClientReadableStream<CommitTransactionsResponse>;

  healthCheck(
    request: HealthCheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: HealthCheckResponse) => void
  ): grpcWeb.ClientReadableStream<HealthCheckResponse>;

}

export class MempoolPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addTransactionWithValidation(
    request: AddTransactionWithValidationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<AddTransactionWithValidationResponse>;

  getBlock(
    request: GetBlockRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetBlockResponse>;

  commitTransactions(
    request: CommitTransactionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CommitTransactionsResponse>;

  healthCheck(
    request: HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<HealthCheckResponse>;

}

