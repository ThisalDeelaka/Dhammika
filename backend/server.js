// /server.js

const app = require('./app');  // Import the app from app.js
require('dotenv').config();  // Load environment variables

const PORT = process.env.PORT || 5000;  // Use port from environment variable or default to 5000

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
