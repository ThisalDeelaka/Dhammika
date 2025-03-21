// /routes/examRoutes.js

const express = require('express');
const router = express.Router();
const { addExam, getExams } = require('../controllers/examController');
const { protect } = require('../middlewares/authMiddleware');

// Protected route to add a new exam (requires authentication)
router.post('/', protect, addExam);

// Public route to get all upcoming exams
router.get('/', getExams);

module.exports = router;

