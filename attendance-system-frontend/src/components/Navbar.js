import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/admin">Admin Dashboard</Link></li>
      <li><Link to="/attendance">Attendance</Link></li>
    </ul>
  </nav>
);

export default Navbar;

