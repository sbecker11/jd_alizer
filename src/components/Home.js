import React from 'react';

import Header from './Header';
import Left from './Left';
import Body from './Body';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="left-column">
          <Left />
        </div>
        <div className="body-content">
          <Body />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
