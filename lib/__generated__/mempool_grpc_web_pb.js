/**
 * @fileoverview gRPC-Web generated client stub for mempool
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var transaction_pb = require('./transaction_pb.js')

var mempool_status_pb = require('./mempool_status_pb.js')
const proto = {};
proto.mempool = require('./mempool_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mempool.MempoolClient =
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
proto.mempool.MempoolPromiseClient =
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
 *   !proto.mempool.AddTransactionWithValidationRequest,
 *   !proto.mempool.AddTransactionWithValidationResponse>}
 */
const methodDescriptor_Mempool_AddTransactionWithValidation = new grpc.web.MethodDescriptor(
  '/mempool.Mempool/AddTransactionWithValidation',
  grpc.web.MethodType.UNARY,
  proto.mempool.AddTransactionWithValidationRequest,
  proto.mempool.AddTransactionWithValidationResponse,
  /** @param {!proto.mempool.AddTransactionWithValidationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.AddTransactionWithValidationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mempool.AddTransactionWithValidationRequest,
 *   !proto.mempool.AddTransactionWithValidationResponse>}
 */
const methodInfo_Mempool_AddTransactionWithValidation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mempool.AddTransactionWithValidationResponse,
  /** @param {!proto.mempool.AddTransactionWithValidationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.AddTransactionWithValidationResponse.deserializeBinary
);


/**
 * @param {!proto.mempool.AddTransactionWithValidationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mempool.AddTransactionWithValidationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mempool.AddTransactionWithValidationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mempool.MempoolClient.prototype.addTransactionWithValidation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mempool.Mempool/AddTransactionWithValidation',
      request,
      metadata || {},
      methodDescriptor_Mempool_AddTransactionWithValidation,
      callback);
};


/**
 * @param {!proto.mempool.AddTransactionWithValidationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mempool.AddTransactionWithValidationResponse>}
 *     A native promise that resolves to the response
 */
proto.mempool.MempoolPromiseClient.prototype.addTransactionWithValidation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mempool.Mempool/AddTransactionWithValidation',
      request,
      metadata || {},
      methodDescriptor_Mempool_AddTransactionWithValidation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mempool.GetBlockRequest,
 *   !proto.mempool.GetBlockResponse>}
 */
const methodDescriptor_Mempool_GetBlock = new grpc.web.MethodDescriptor(
  '/mempool.Mempool/GetBlock',
  grpc.web.MethodType.UNARY,
  proto.mempool.GetBlockRequest,
  proto.mempool.GetBlockResponse,
  /** @param {!proto.mempool.GetBlockRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.GetBlockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mempool.GetBlockRequest,
 *   !proto.mempool.GetBlockResponse>}
 */
const methodInfo_Mempool_GetBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mempool.GetBlockResponse,
  /** @param {!proto.mempool.GetBlockRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.GetBlockResponse.deserializeBinary
);


/**
 * @param {!proto.mempool.GetBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mempool.GetBlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mempool.GetBlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mempool.MempoolClient.prototype.getBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mempool.Mempool/GetBlock',
      request,
      metadata || {},
      methodDescriptor_Mempool_GetBlock,
      callback);
};


/**
 * @param {!proto.mempool.GetBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mempool.GetBlockResponse>}
 *     A native promise that resolves to the response
 */
proto.mempool.MempoolPromiseClient.prototype.getBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mempool.Mempool/GetBlock',
      request,
      metadata || {},
      methodDescriptor_Mempool_GetBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mempool.CommitTransactionsRequest,
 *   !proto.mempool.CommitTransactionsResponse>}
 */
const methodDescriptor_Mempool_CommitTransactions = new grpc.web.MethodDescriptor(
  '/mempool.Mempool/CommitTransactions',
  grpc.web.MethodType.UNARY,
  proto.mempool.CommitTransactionsRequest,
  proto.mempool.CommitTransactionsResponse,
  /** @param {!proto.mempool.CommitTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.CommitTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mempool.CommitTransactionsRequest,
 *   !proto.mempool.CommitTransactionsResponse>}
 */
const methodInfo_Mempool_CommitTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mempool.CommitTransactionsResponse,
  /** @param {!proto.mempool.CommitTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.CommitTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.mempool.CommitTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mempool.CommitTransactionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mempool.CommitTransactionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mempool.MempoolClient.prototype.commitTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mempool.Mempool/CommitTransactions',
      request,
      metadata || {},
      methodDescriptor_Mempool_CommitTransactions,
      callback);
};


/**
 * @param {!proto.mempool.CommitTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mempool.CommitTransactionsResponse>}
 *     A native promise that resolves to the response
 */
proto.mempool.MempoolPromiseClient.prototype.commitTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mempool.Mempool/CommitTransactions',
      request,
      metadata || {},
      methodDescriptor_Mempool_CommitTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mempool.HealthCheckRequest,
 *   !proto.mempool.HealthCheckResponse>}
 */
const methodDescriptor_Mempool_HealthCheck = new grpc.web.MethodDescriptor(
  '/mempool.Mempool/HealthCheck',
  grpc.web.MethodType.UNARY,
  proto.mempool.HealthCheckRequest,
  proto.mempool.HealthCheckResponse,
  /** @param {!proto.mempool.HealthCheckRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mempool.HealthCheckRequest,
 *   !proto.mempool.HealthCheckResponse>}
 */
const methodInfo_Mempool_HealthCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mempool.HealthCheckResponse,
  /** @param {!proto.mempool.HealthCheckRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mempool.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.mempool.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mempool.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mempool.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mempool.MempoolClient.prototype.healthCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mempool.Mempool/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_Mempool_HealthCheck,
      callback);
};


/**
 * @param {!proto.mempool.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mempool.HealthCheckResponse>}
 *     A native promise that resolves to the response
 */
proto.mempool.MempoolPromiseClient.prototype.healthCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mempool.Mempool/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_Mempool_HealthCheck);
};


module.exports = proto.mempool;

