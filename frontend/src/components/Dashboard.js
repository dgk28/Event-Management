import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Make sure the path is correct

function Dashboard() {
  return (
    <div className="dashboard-container"> {/* Apply the container class */}
      <h1 className="dashboard-title">Welcome to Event Management Dashboard</h1> {/* Apply title class */}
      <div className="dashboard-buttons"> {/* Apply buttons container class */}
        <Link to="/create-event">
          <button className="dashboard-button">Create New Event</button> {/* Apply button class */}
        </Link>
        <Link to="/events">
          <button className="dashboard-button">View Events</button> {/* Apply button class */}
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
