import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Attendance System Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to="/attendance"
            variant="contained"
            color="primary"
            fullWidth
          >
            Mark Attendance
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to="/reports"
            variant="contained"
            color="secondary"
            fullWidth
          >
            View Reports
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;


