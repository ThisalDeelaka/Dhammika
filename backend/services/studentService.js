// /services/studentService.js

const Student = require('../models/studentModel');
const Mark = require('../models/marksModel');

// Calculate rank for a student based on marks
const calculateRank = async (studentId) => {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      throw new Error('Student not found');
    }

    // Calculate rank based on marks for Paper I and Paper II for each paper
    const rankData = [];
    for (const paperKey of Object.keys(student.papers)) {
      const paper = student.papers[paperKey];
      const totalMarks = paper.paperI + paper.paperII;

      // Get all students and their total marks for the same paper
      const students = await Student.find().select('studentId papers');
      const totalMarksArray = students.map(s => ({
        studentId: s.studentId,
        totalMarks: s.papers[paperKey].paperI + s.papers[paperKey].paperII,
      }));

      // Sort students by total marks in descending order
      totalMarksArray.sort((a, b) => b.totalMarks - a.totalMarks);

      // Find the student's rank based on their total marks
      const studentRank = totalMarksArray.findIndex(student => student.studentId === student.studentId) + 1;
      rankData.push({ paperKey, rank: studentRank, totalMarks });
    }

    // Return rank data for the student
    return rankData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update student rank after calculating
const updateStudentRank = async (studentId, rankData) => {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      throw new Error('Student not found');
    }

    // Update the rank for each paper
    rankData.forEach(({ paperKey, rank }) => {
      student.papers[paperKey].rank = rank;
    });

    await student.save();
    return student;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all students sorted by overall rank
const getClassRankings = async () => {
  try {
    const students = await Student.find().sort('classRank');
    return students;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  calculateRank,
  updateStudentRank,
  getClassRankings,
};

