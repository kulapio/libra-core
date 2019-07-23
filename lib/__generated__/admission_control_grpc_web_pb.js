/**
 * @fileoverview gRPC-Web generated client stub for admission_control
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var get_with_proof_pb = require('./get_with_proof_pb.js')

var mempool_status_pb = require('./mempool_status_pb.js')

var transaction_pb = require('./transaction_pb.js')

var vm_errors_pb = require('./vm_errors_pb.js')
const proto = {};
proto.admission_control = require('./admission_control_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admission_control.AdmissionControlClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admission_control.AdmissionControlPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admission_control.SubmitTransactionRequest,
 *   !proto.admission_control.SubmitTransactionResponse>}
 */
const methodDescriptor_AdmissionControl_SubmitTransaction = new grpc.web.MethodDescriptor(
  '/admission_control.AdmissionControl/SubmitTransaction',
  grpc.web.MethodType.UNARY,
  proto.admission_control.SubmitTransactionRequest,
  proto.admission_control.SubmitTransactionResponse,
  /** @param {!proto.admission_control.SubmitTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.admission_control.SubmitTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admission_control.SubmitTransactionRequest,
 *   !proto.admission_control.SubmitTransactionResponse>}
 */
const methodInfo_AdmissionControl_SubmitTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admission_control.SubmitTransactionResponse,
  /** @param {!proto.admission_control.SubmitTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.admission_control.SubmitTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.admission_control.SubmitTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admission_control.SubmitTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admission_control.SubmitTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admission_control.AdmissionControlClient.prototype.submitTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admission_control.AdmissionControl/SubmitTransaction',
      request,
      metadata || {},
      methodDescriptor_AdmissionControl_SubmitTransaction,
      callback);
};


/**
 * @param {!proto.admission_control.SubmitTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admission_control.SubmitTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.admission_control.AdmissionControlPromiseClient.prototype.submitTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admission_control.AdmissionControl/SubmitTransaction',
      request,
      metadata || {},
      methodDescriptor_AdmissionControl_SubmitTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.types.UpdateToLatestLedgerRequest,
 *   !proto.types.UpdateToLatestLedgerResponse>}
 */
const methodDescriptor_AdmissionControl_UpdateToLatestLedger = new grpc.web.MethodDescriptor(
  '/admission_control.AdmissionControl/UpdateToLatestLedger',
  grpc.web.MethodType.UNARY,
  get_with_proof_pb.UpdateToLatestLedgerRequest,
  get_with_proof_pb.UpdateToLatestLedgerResponse,
  /** @param {!proto.types.UpdateToLatestLedgerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  get_with_proof_pb.UpdateToLatestLedgerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.types.UpdateToLatestLedgerRequest,
 *   !proto.types.UpdateToLatestLedgerResponse>}
 */
const methodInfo_AdmissionControl_UpdateToLatestLedger = new grpc.web.AbstractClientBase.MethodInfo(
  get_with_proof_pb.UpdateToLatestLedgerResponse,
  /** @param {!proto.types.UpdateToLatestLedgerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  get_with_proof_pb.UpdateToLatestLedgerResponse.deserializeBinary
);


/**
 * @param {!proto.types.UpdateToLatestLedgerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.types.UpdateToLatestLedgerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.types.UpdateToLatestLedgerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admission_control.AdmissionControlClient.prototype.updateToLatestLedger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admission_control.AdmissionControl/UpdateToLatestLedger',
      request,
      metadata || {},
      methodDescriptor_AdmissionControl_UpdateToLatestLedger,
      callback);
};


/**
 * @param {!proto.types.UpdateToLatestLedgerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.types.UpdateToLatestLedgerResponse>}
 *     A native promise that resolves to the response
 */
proto.admission_control.AdmissionControlPromiseClient.prototype.updateToLatestLedger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admission_control.AdmissionControl/UpdateToLatestLedger',
      request,
      metadata || {},
      methodDescriptor_AdmissionControl_UpdateToLatestLedger);
};


module.exports = proto.admission_control;

