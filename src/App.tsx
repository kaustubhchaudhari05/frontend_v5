import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './pages/Regsiter';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
