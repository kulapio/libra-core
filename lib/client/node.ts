import { credentials, ServiceError } from 'grpc';

import { AdmissionControlClient } from '../__generated__/admission_control_grpc_pb';
import {
  SubmitTransactionRequest,
  SubmitTransactionResponse,
} from '../__generated__/admission_control_pb';
import {
  UpdateToLatestLedgerRequest,
  UpdateToLatestLedgerResponse
} from '../__generated__/get_with_proof_pb';

import { LibraLibConfig } from '.';

export function initAdmissionControlClient(config: LibraLibConfig) {
  const connectionAddress = `${config.dataProtocol === 'grpc' ? '' : config.transferProtocol + '://'}${config.host}:${config.port}`;
  return new AdmissionControlClient(connectionAddress, credentials.createInsecure());
}

export async function updateToLatestLedger(acClient: AdmissionControlClient, request: UpdateToLatestLedgerRequest): Promise<UpdateToLatestLedgerResponse> {
  return new Promise<UpdateToLatestLedgerResponse>((resolve, reject) => {
    acClient.updateToLatestLedger(request, (error: ServiceError | null, response: UpdateToLatestLedgerResponse) => {
      if (error) {
        return reject(error);
      }
      resolve(response)
    });
  });
}

export async function submitTransaction(acClient: AdmissionControlClient, request: SubmitTransactionRequest): Promise<SubmitTransactionResponse> {
  return new Promise<SubmitTransactionResponse>((resolve, reject) => {
    acClient.submitTransaction(request, (error: ServiceError | null, response: SubmitTransactionResponse) => {
      if (error) {
        return reject(error);
      }
      resolve(response)
    });
  });
}
