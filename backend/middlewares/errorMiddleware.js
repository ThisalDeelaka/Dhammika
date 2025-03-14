// /middlewares/errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
  
    // Log the error stack for debugging purposes
    console.error(err.stack);
  
    // Send a consistent error response
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
    });
  };
  
  module.exports = { errorHandler };
  
