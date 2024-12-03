import React, { useState } from "react";
import axios from "axios";
import { Button, Typography, Box } from "@mui/material";

const AttendanceForm = () => {
  const [status, setStatus] = useState("");

  const handleCheckIn = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/attendance/checkin`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStatus(response.data.message);
    } catch (err) {
      setStatus("Check-in failed: " + (err.response?.data?.message || err.message));
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/attendance/checkout`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStatus(response.data.message);
    } catch (err) {
      setStatus("Check-out failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <Box>
      <Typography variant="h4">Attendance</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckIn}>Check-In</Button>
      <Button variant="contained" color="secondary" onClick={handleCheckOut}>Check-Out</Button>
      <Typography variant="body1">{status}</Typography>
    </Box>
  );
};

export default AttendanceForm;
