import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the router components and Routes

import Header from './components/Header';
import Left from './components/Left';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <div className="left-column">
            <Left />
          </div>
          <div className="body-content">
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login-register" element={<Profile />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
