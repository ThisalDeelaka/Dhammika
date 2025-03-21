// /routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const { registerStudent, getStudentDetails, updateRank, getClassRankings } = require('../controllers/studentController');
const { protect } = require('../middlewares/authMiddleware');

// Public route for student registration
router.post('/register', registerStudent);

// Protected route to get student details (requires authentication)
router.get('/:studentId', protect, getStudentDetails);

// Protected route to update student rank (requires authentication)
router.put('/:studentId/rank', protect, updateRank);

// Public route to get class rankings (all students' ranks)
router.get('/rankings', getClassRankings);

module.exports = router;

