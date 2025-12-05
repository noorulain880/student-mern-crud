// backend/routes/studentRoutes.js
const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

// POST /api/students - Create
router.post('/', async (req, res) => {
  try {
    const { name, email, age, course } = req.body;
    const newStudent = await Student.create({ name, email, age, course });
    res.status(201).json(newStudent);
  } catch (err) {
    console.error('Error creating student:', err);
    res.status(500).json({ message: 'Failed to create student', error: err.message });
  }
});

// GET /api/students - All
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ message: 'Failed to fetch students', error: err.message });
  }
});

// GET /api/students/:id - One
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    console.error('Error fetching student:', err);
    res.status(500).json({ message: 'Failed to fetch student', error: err.message });
  }
});

// PUT /api/students/:id - Update
router.put('/:id', async (req, res) => {
  try {
    const { name, email, age, course } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, age, course },
      { new: true, runValidators: true }
    );
    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json(updatedStudent);
  } catch (err) {
    console.error('Error updating student:', err);
    res.status(500).json({ message: 'Failed to update student', error: err.message });
  }
});

// DELETE /api/students/:id - Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    console.error('Error deleting student:', err);
    res.status(500).json({ message: 'Failed to delete student', error: err.message });
  }
});

module.exports = router;
