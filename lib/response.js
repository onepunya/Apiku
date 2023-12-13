function successResponse(res, message, data, statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

function errorResponse(res, message, statusCode = 500) {
  return res.status(statusCode).json({
    success: false,
    message,
  });
}

function validationError(res, errors) {
  return res.status(422).json({
    success: false,
    message: 'Validation error',
    errors,
  });
}

module.exports = {
  successResponse,
  errorResponse,
  validationError,
};