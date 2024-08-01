import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QuoteListPage from './pages/QuoteListPage';
import CreateQuotePage from './pages/CreateQuotePage';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!token ? <LoginPage setToken={setToken} /> : <Navigate to="/quotes" />} />
        <Route path="/quotes" element={token ? <QuoteListPage token={token} /> : <Navigate to="/" />} />
        <Route path="/create-quote" element={token ? <CreateQuotePage token={token} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
