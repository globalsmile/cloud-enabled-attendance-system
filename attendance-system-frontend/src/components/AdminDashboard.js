import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField, Typography, Box, List, ListItem } from "@mui/material";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, { name: newUser }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers([...users, response.data]);
    } catch (err) {
      console.error("Failed to add user: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <Box>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Box>
        <TextField
          label="New User Name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddUser}>Add User</Button>
      </Box>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminDashboard;
