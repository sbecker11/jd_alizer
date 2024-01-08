import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header({ onHomeClick, onAboutClick, onLoginRegisterClick }) {
  return (
    <header>
      <div className="header-left">
        <img src="./logo192.png" alt="Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <nav>
          <ul>
            {/* Use Link components for navigation */}
            <li><Link to="/" onClick={onHomeClick}>Home</Link></li>
            <li><Link to="/about" onClick={onAboutClick}>About</Link></li>
            <li><Link to="/login-register" onClick={onLoginRegisterClick}>Login/Register</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
