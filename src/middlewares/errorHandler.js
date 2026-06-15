const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Server Error";

  // Mongoose duplicate key
  if (err.code === 11000) {
    statusCode = 400;
    message = "Valores duplicados ingresados (" + Object.keys(err.keyValue) + ")";
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};
export {
  errorHandler
};
