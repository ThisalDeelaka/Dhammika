const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

const studentRoutes = require('./routes/studentRoutes');
const marksRoutes = require('./routes/marksRoutes');
const examRoutes = require('./routes/examRoutes');

const { errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/students', studentRoutes);
app.use('/api/marks', marksRoutes);
app.use('/api/exams', examRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
