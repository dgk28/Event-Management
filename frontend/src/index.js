 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Path to your App component
import './index.css'; // Import your global CSS styles if any
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with BrowserRouter for routing capabilities
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
