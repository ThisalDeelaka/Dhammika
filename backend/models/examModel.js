// /models/examModel.js

const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
  {
    examName: { type: String, required: true }, // E.g., Midterm Exam, Final Exam
    paper: { type: String, required: true }, // E.g., Paper I, Paper II
    examDate: { type: Date, required: true }, // Date of the exam
    duration: { type: Number, required: true }, // Duration of the exam in minutes
    description: { type: String, default: '' }, // Additional details or description of the exam
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;

