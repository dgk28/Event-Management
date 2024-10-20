import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  useEffect(() => {
    // Set the embedded chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "OhxvhsQvI0eG_p8IJ0o-7",
      domain: "www.chatbase.co"
    };

    // Create the script element dynamically
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', "OhxvhsQvI0eG_p8IJ0o-7");
    script.setAttribute('domain', "www.chatbase.co");
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="homepage-container">
      <h1>Welcome to Event Management App</h1>
      <p>Please register or login to manage events.</p>
      <div className="split-container">
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
