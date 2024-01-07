import React, { useState } from 'react'; // Import useState from 'react'
import { BrowserRouter as Router } from 'react-router-dom'; // Import the router component

import Header from './components/Header';
import Left from './components/Left';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  const [currentContent, setCurrentContent] = useState(<Profile />);

  const handleAboutClick = () => {
    setCurrentContent(<About />);
  };

  const handleLoginRegisterClick = () => {
    setCurrentContent(<Profile />);
  };

  return (
    <Router>
      <div>
        <Header onAboutClick={handleAboutClick} onLoginRegisterClick={handleLoginRegisterClick} />
        <div className="container">
          <div className="left-column">
            <Left />
          </div>
          <div className="body-content">
            {currentContent}
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
