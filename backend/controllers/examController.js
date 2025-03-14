// /controllers/examController.js

const examService = require('../services/examService');
const { addExam, getUpcomingExams } = examService;

// Add a new exam
exports.addExam = async (req, res) => {
  try {
    const { examName, paper, examDate, duration, description } = req.body;

    // Add exam using examService
    const newExam = await addExam(examName, paper, examDate, duration, description);

    res.status(201).json({ message: 'Exam added successfully', newExam });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get upcoming exams
exports.getExams = async (req, res) => {
  try {
    const exams = await getUpcomingExams();
    res.status(200).json(exams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
