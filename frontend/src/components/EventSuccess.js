import React from 'react';
import { Link } from 'react-router-dom';

function EventSuccess() {
  return (
    <div className="event-success-container">
      <h2>Event Created Successfully!</h2>
      <p>Your event has been created. You can view all events below.</p>
      <Link to="/events">
        <button>View Events</button>
      </Link>
    </div>
  );
}

export default EventSuccess;
