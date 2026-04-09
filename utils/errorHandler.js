class AppError extends Error {
  constructor(message, statusCode = 500, details = null) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

function apiErrorResponse(res, error) {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    error: error.message || 'Internal server error',
    details: error.details || null
  });
}

function globalErrorHandler(error, req, res, _next) {
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    error: error.message || 'Unexpected error',
    path: req.originalUrl
  });
}

module.exports = {
  AppError,
  apiErrorResponse,
  globalErrorHandler
};
