import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EventCreate.css'; // Assuming you already have the CSS

function EventCreate() {
  const [formData, setFormData] = useState({ title: '', description: '', date: '', location: '' });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/events/create', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      console.log('Event created:', response.data);
      // Navigate to the success page after event creation
      navigate('/event-success');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="event-create-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Title" onChange={handleChange} />
        <input name="description" type="text" placeholder="Description" onChange={handleChange} />
        <input name="date" type="date" onChange={handleChange} />
        <input name="location" type="text" placeholder="Location" onChange={handleChange} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default EventCreate;
