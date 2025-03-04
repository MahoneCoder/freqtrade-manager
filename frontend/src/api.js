## src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const loginUser = async (username, password) => {
  return await axios.post(`${API_URL}/users/login`, { username, password });
};

## src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
export default Navbar;
