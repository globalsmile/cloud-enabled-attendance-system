import React, { useState, useEffect } from "react";
import axios from "axios";

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
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="New User Name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

