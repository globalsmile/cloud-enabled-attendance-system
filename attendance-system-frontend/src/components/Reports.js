import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

function Reports() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('/api/attendance', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Failed to fetch attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Attendance Reports
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Check-in Time</TableCell>
              <TableCell>Check-out Time</TableCell>
              <TableCell>Total Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{`${record.User.firstName} ${record.User.lastName}`}</TableCell>
                <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                <TableCell>{record.checkInTime}</TableCell>
                <TableCell>{record.checkOutTime || 'Not checked out'}</TableCell>
                <TableCell>{record.totalHours ? record.totalHours.toFixed(2) : 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Reports;


