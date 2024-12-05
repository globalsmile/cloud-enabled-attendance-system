// routes/attendance.js
const express = require('express');
const { Attendance } = require('../models');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  try {
    const { employeeId } = req.body;
    const attendance = await Attendance.create({ employeeId });
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Error marking attendance' });
  }
});

router.get('/', authenticateToken, async (req, res) => {
  try {
    const attendanceRecords = await Attendance.findAll();
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance records' });
  }
});

module.exports = router;
