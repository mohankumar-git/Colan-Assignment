const express = require('express');
const router = express.Router();
const {
  addStudent,
  getAllStudents,
  getStudentById,
  editStudent,
  deleteStudent
} = require('../controllers/studentController');

router.post('/', addStudent);

router.get('/students', getAllStudents);

router.get('/students/:id', getStudentById);

router.put('/students/:id', editStudent);

router.delete('/students/:id', deleteStudent);

module.exports = router;
