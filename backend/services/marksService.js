// /services/marksService.js

const Student = require('../models/studentModel');
const Mark = require('../models/marksModel');

// Add marks for a student
const addMarksForStudent = async (studentId, paper, paperI, paperII, fullMarks, examDate, rank) => {
  try {
    // Find the student by studentId
    const student = await Student.findOne({ studentId });
    if (!student) {
      throw new Error('Student not found');
    }

    // Create a new Mark document
    const newMark = new Mark({
      student: student._id,
      paper,
      paperI,
      paperII,
      fullMarks,
      rank,
      examDate,
    });

    await newMark.save();

    // Add the new marks to the student's papers field
    if (paper === 'firstPaper') {
      student.papers.firstPaper = { paperI, paperII, fullMarks, rank };
    } else if (paper === 'secondPaper') {
      student.papers.secondPaper = { paperI, paperII, fullMarks, rank };
    }

    await student.save();

    return newMark;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get marks for a specific student
const getMarksForStudent = async (studentId) => {
  try {
    // Retrieve the student's marks
    const student = await Student.findOne({ studentId }).populate('papers.firstPaper.marks').populate('papers.secondPaper.marks');
    if (!student) {
      throw new Error('Student not found');
    }

    return student.papers;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addMarksForStudent,
  getMarksForStudent,
};

