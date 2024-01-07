import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Left from './components/Left';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <div className="left-column">
          <Left />
        </div>
        <div className="body-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

