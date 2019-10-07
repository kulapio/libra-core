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

export function initAdmissionControlClient(connectionAddress: string): AdmissionControlClient {
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
