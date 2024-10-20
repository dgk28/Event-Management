import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css'; // Import the CSS file

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Function to format the WhatsApp URL
  const sendToWhatsApp = (event) => {
    const { title, date, location } = event;
    const message = `Hello! I would like to join the event: *${title}*. \n\nEvent Details:\n- Date: ${date}\n- Location: ${location}`;
    const phoneNumber = ''; // Add the recipient's phone number here
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab
  };

  return (
    <div>
      <h1 className="events-heading">Events</h1>
      <div className="event-list-container">
        {events.map((event) => (
          <div key={event._id} className="event-box">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <p className="event-date"><strong>Date:</strong> {event.date}</p>
            <p className="event-location"><strong>Location:</strong> {event.location}</p>
            
            {/* Join Button */}
            <button className="join-button" onClick={() => sendToWhatsApp(event)}>
              Join via WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
