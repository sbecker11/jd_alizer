import React from 'react';

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
