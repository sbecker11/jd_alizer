import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onAboutClick, onLoginRegisterClick }) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#" onClick={onAboutClick}>About</a></li>
          <li><a href="#" onClick={onLoginRegisterClick}>Login/Register</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
