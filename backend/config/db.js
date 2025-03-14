// /config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use environment variables to keep sensitive data like database URI
    const dbURI = process.env.MONGO_URI;
    
    if (!dbURI) {
      console.error("MongoDB URI is not provided in environment variables");
      process.exit(1); // Exit the application if no MongoDB URI
    }
    
    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the application on connection failure
  }
};

module.exports = connectDB;
