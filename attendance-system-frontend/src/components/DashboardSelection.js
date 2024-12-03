import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function DashboardSelection() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ mt: 4 }}>
        Select Your Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Admin Dashboard
            </Typography>
            <Typography variant="body1" paragraph>
              Manage users, view reports, and perform administrative tasks.
            </Typography>
            <Button
              component={Link}
              to="/admin"
              variant="contained"
              color="primary"
              fullWidth
            >
              Go to Admin Dashboard
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              User Dashboard
            </Typography>
            <Typography variant="body1" paragraph>
              Mark your attendance and view your personal records.
            </Typography>
            <Button
              component={Link}
              to="/user"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Go to User Dashboard
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardSelection;


