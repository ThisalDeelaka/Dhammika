// /models/marksModel.js

const mongoose = require('mongoose');

const markSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student', // Reference to the Student model
      required: true,
    },
    paper: { type: String, required: true }, // E.g., "First Paper", "Second Paper"
    paperI: { type: Number, required: true }, // Marks for Paper I
    paperII: { type: Number, required: true }, // Marks for Paper II
    fullMarks: { type: Number, required: true }, // Full marks for both Paper I and II
    rank: { type: Number, default: null }, // Rank for this paper
    examDate: { type: Date, required: true }, // Date of the exam
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Mark = mongoose.model('Mark', markSchema);

module.exports = Mark;

