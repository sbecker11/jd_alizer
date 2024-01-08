import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Left({ onHomeClick, onAboutClick, onLoginRegisterClick }) {
  return (
    <div className="left">
      <ul>
        {/* Use Link components for navigation */}
        <li><Link to="/" onClick={onHomeClick}>Home</Link></li>
        <li><Link to="/about" onClick={onAboutClick}>About</Link></li>
        <li><Link to="/login-register" onClick={onLoginRegisterClick}>Login/Register</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
}

export default Left;
