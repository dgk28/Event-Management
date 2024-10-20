  
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const registerUser = (formData) => API.post('/auth/register', formData);
export const loginUser = (formData) => API.post('/auth/login', formData);
export const createEvent = (eventData) => API.post('/events/create', eventData);
export const getEvents = () => API.get('/events');
export const getEventDetails = (id) => API.get(`/events/${id}`);
