import React, { useState } from 'react';
import { login } from '../services/api';

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, otp);
      setToken(response.data.token); // Assuming the response contains a token
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
