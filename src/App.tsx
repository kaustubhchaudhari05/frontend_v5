import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './pages/register';
import HomePage from './pages/home';
import { routes } from './routes';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* {routes.map((route, id) => {
          return (
            <Route
              index
              key={id}
              path={route.path}
              element={route.component}
            />
          );
        })} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
