import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };
    fetchEvent();
  }, [id]);

  return (
    <div>
      {event ? (
        <>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <a href={`whatsapp://send?text=Check out this event: ${event.title}`}>
            Share on WhatsApp
          </a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EventDetails;
