
// /models/studentModel.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    studentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    papers: {
      firstPaper: {
        paperI: { type: Number, required: true }, // Marks for Paper I
        paperII: { type: Number, required: true }, // Marks for Paper II
        fullMarks: { type: Number, required: true }, // Full marks for both Paper I and Paper II
        rank: { type: Number, default: null }, // Rank in the 1st paper
      },
      secondPaper: {
        paperI: { type: Number, required: true },
        paperII: { type: Number, required: true },
        fullMarks: { type: Number, required: true },
        rank: { type: Number, default: null },
      },
      // You can continue adding more papers (thirdPaper, etc.)
    },
    classRank: { type: Number, default: null }, // Overall class rank
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
