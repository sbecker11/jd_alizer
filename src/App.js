import React, { useState } from 'react'; // Import useState from 'react'
import { BrowserRouter as Router } from 'react-router-dom'; // Import the router component

import Header from './components/Header';
import Left from './components/Left';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import './App.css'; // Import the CSS file

function App() {
  const [currentBodyContent, setCurrentBodyContent] = useState(<Home />);

  const handleHomeClick = () => {
    setCurrentBodyContent(<Home />);
  };
  const handleAboutClick = () => {
    setCurrentBodyContent(<About />);
  };

  const handleLoginRegisterClick = () => {
    setCurrentBodyContent(<Profile />);
  };

  return (
    <Router>
      <div>
        <Header 
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick} 
          onLoginRegisterClick={handleLoginRegisterClick} 
        />
        <div className="container">
          <div className="left-column">
            <Left />
          </div>
          <div className="body-content">
            {currentBodyContent}
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
