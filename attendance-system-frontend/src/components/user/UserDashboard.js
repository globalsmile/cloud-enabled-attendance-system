import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';

function UserDashboard() {
  const [checkInStatus, setCheckInStatus] = useState(null);
  const [lastAttendance, setLastAttendance] = useState(null);

  useEffect(() => {
    fetchLastAttendance();
  }, []);

  const fetchLastAttendancefetchLastAttendance = async () => {
    try {
      const response = await axios.get('/api/attendance/user', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (response.data.length > 0) {
        setLastAttendance(response.data[0]);
        setCheckInStatus(response.data[0].checkOutTime ? 'checked-out' : 'checked-in');
      } else {
        setCheckInStatus('checked-out');
      }
    } catch (error) {
      console.error('Error fetching last attendance:', error);
    }
  };

  const handleCheckIn = async () => {
    try {
      await axios.post('/api/attendance/check-in', {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCheckInStatus('checked-in');
      fetchLastAttendance();
    } catch (error) {
      console.error('Error checking in:', error);
    }
  };

  const handleCheckOut = async () => {
    try {
      await axios.post('/api/attendance/check-out', {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCheckInStatus('checked-out');
      fetchLastAttendance();
    } catch (error) {
      console.error('Error checking out:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        User Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Attendance Status
            </Typography>
            {checkInStatus === 'checked-in' ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCheckOut}
              >
                Check Out
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckIn}
              >
                Check In
              </Button>
            )}
          </Paper>
        </Grid>
        {lastAttendance && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Last Attendance Record
              </Typography>
              <Typography>Date: {new Date(lastAttendance.date).toLocaleDateString()}</Typography>
              <Typography>Check-in Time: {lastAttendance.checkInTime}</Typography>
              {lastAttendance.checkOutTime && (
                <>
                  <Typography>Check-out Time: {lastAttendance.checkOutTime}</Typography>
                  <Typography>Total Hours: {lastAttendance.totalHours}</Typography>
                </>
              )}
            </Paper>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              window.location.href = '/';
            }}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserDashboard;


