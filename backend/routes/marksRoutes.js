// /routes/marksRoutes.js

const express = require('express');
const router = express.Router();
const { addMarks, getMarks } = require('../controllers/marksController');
const { protect } = require('../middlewares/authMiddleware');

// Protected route to add marks for a student (requires authentication)
router.post('/', protect, addMarks);

// Protected route to get marks for a specific student (requires authentication)
router.get('/:studentId', protect, getMarks);

module.exports = router;

