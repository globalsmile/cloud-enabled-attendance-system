import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h3" gutterBottom>
          Welcome to Attendance System
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Manage your attendance efficiently with our cloud-based system.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            size="large"
            sx={{ minWidth: 200 }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;


