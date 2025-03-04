// /app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const marksRoutes = require('./routes/marksRoutes');
const examRoutes = require('./routes/examRoutes');

// Import middlewares
const { errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/marks', marksRoutes);
app.use('/api/exams', examRoutes);

// Use error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;

