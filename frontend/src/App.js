import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import EventCreate from './components/EventCreate';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import Home from './components/Home';
import EventSuccess from './components/EventSuccess';
import Dashboard from './components/Dashboard'; // Importing the Dashboard component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/create-event" element={isAuthenticated ? <EventCreate /> : <Navigate to="/login" />} />
      <Route path="/events" element={isAuthenticated ? <EventList /> : <Navigate to="/login" />} />
      <Route path="/events/:id" element={isAuthenticated ? <EventDetails /> : <Navigate to="/login" />} />
      <Route path="/event-success" element={isAuthenticated ? <EventSuccess /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
