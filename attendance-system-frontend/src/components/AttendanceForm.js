import React, { useState } from "react";
import axios from "axios";

const AttendanceForm = () => {
  const [status, setStatus] = useState("");

  const handleCheckIn = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/attendance/checkin`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStatus(response.data.message);
    } catch (err) {
      setStatus("Check-in failed.");
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/attendance/checkout`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStatus(response.data.message);
    } catch (err) {
      setStatus("Check-out failed.");
    }
  };

  return (
    <div>
      <h2>Attendance</h2>
      <button onClick={handleCheckIn}>Check-In</button>
      <button onClick={handleCheckOut}>Check-Out</button>
      <p>{status}</p>
    </div>
  );
};

export default AttendanceForm;

