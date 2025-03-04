## src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed');
    }
  };

    return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
