import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onHomeClick, onAboutClick, onLoginRegisterClick }) {
  return (
    <header>
      <img src="/public/logo192.png" alt="Logo" className="header-logo" />
      <nav>
        <ul>
          <li><a href="#" onClick={onHomeClick}>Home</a></li>
          <li><a href="#" onClick={onAboutClick}>About</a></li>
          <li><a href="#" onClick={onLoginRegisterClick}>Login/Register</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
