import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'; // Add import statement for React

import App from './App';

test('navigates to About page when About link is clicked', () => {
  render(<App />);
  
  // Get the About link and click it
  const aboutLink = screen.getByText(/about/i);
  fireEvent.click(aboutLink);
  
  // Check if the About page content is displayed
  const aboutContent = screen.getByText(/This is the About page/i);
  expect(aboutContent).toBeInTheDocument();
});