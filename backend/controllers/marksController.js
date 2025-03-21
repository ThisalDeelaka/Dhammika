// /controllers/marksController.js

const marksService = require('../services/marksService');
const { addMarksForStudent, getMarksForStudent } = marksService;

// Add marks for a student
exports.addMarks = async (req, res) => {
  try {
    const { studentId, paper, paperI, paperII, fullMarks, examDate, rank } = req.body;

    // Add marks for the student using marksService
    const newMark = await addMarksForStudent(studentId, paper, paperI, paperII, fullMarks, examDate, rank);

    res.status(201).json({ message: 'Marks added successfully', newMark });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get marks for a student
exports.getMarks = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Get marks for the student using marksService
    const marks = await getMarksForStudent(studentId);
    res.status(200).json(marks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
