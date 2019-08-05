import { AdmissionControlPromiseClient as AdmissionControlClientGrpcWeb } from '../__generated__/admission_control_grpc_web_pb';
import {
  SubmitTransactionRequest,
  SubmitTransactionResponse,
} from '../__generated__/admission_control_pb';
import {
  UpdateToLatestLedgerRequest,
  UpdateToLatestLedgerResponse
} from '../__generated__/get_with_proof_pb';

export function initAdmissionControlClient(connectionAddress: string) : AdmissionControlClientGrpcWeb {
  return new AdmissionControlClientGrpcWeb(connectionAddress, null);
}

export async function updateToLatestLedger(acClient: AdmissionControlClientGrpcWeb, request: UpdateToLatestLedgerRequest): Promise<UpdateToLatestLedgerResponse> {
  return acClient.updateToLatestLedger(request)
}

export async function submitTransaction(acClient: AdmissionControlClientGrpcWeb, request: SubmitTransactionRequest): Promise<SubmitTransactionResponse> {
  return acClient.submitTransaction(request)
}
