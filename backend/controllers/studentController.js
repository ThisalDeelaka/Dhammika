// /controllers/studentController.js

const studentService = require('../services/studentService');
const { calculateRank, updateStudentRank, getClassRankings } = studentService;

// Register a new student
exports.registerStudent = async (req, res) => {
  try {
    const { studentId, name } = req.body;

    // Check if the student already exists
    const existingStudent = await Student.findOne({ studentId });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student already exists' });
    }

    const newStudent = new Student({ studentId, name });
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get student details (marks, rank)
exports.getStudentDetails = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find the student by studentId
    const student = await Student.findOne({ studentId }).populate('papers.firstPaper.marks').populate('papers.secondPaper.marks');
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update student rank after calculating rank
exports.updateRank = async (req, res) => {
  try {
    const { studentId } = req.params;
    
    // Calculate rank using the studentService
    const rankData = await calculateRank(studentId);

    // Update rank using the studentService
    const updatedStudent = await updateStudentRank(studentId, rankData);
    
    res.status(200).json({ message: 'Rank updated successfully', student: updatedStudent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get class rankings
exports.getClassRankings = async (req, res) => {
  try {
    const classRankings = await getClassRankings();
    res.status(200).json(classRankings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
