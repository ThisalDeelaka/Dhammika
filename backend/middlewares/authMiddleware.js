// /middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to protect routes and verify JWT token
const protect = (req, res, next) => {
  let token = req.headers['authorization'];
  
  // Check if the token is provided
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Bearer token format
  token = token.split(' ')[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach the decoded user to the request object
    next(); // Allow the request to continue to the next middleware or route
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { protect };

