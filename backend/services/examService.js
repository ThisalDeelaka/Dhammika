// /services/examService.js

const Exam = require('../models/examModel');

// Add a new exam
const addExam = async (examName, paper, examDate, duration, description) => {
  try {
    const newExam = new Exam({
      examName,
      paper,
      examDate,
      duration,
      description,
    });

    await newExam.save();
    return newExam;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all upcoming exams
const getUpcomingExams = async () => {
  try {
    const exams = await Exam.find().sort({ examDate: 1 }); // Sort exams by date
    return exams;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addExam,
  getUpcomingExams,
};

