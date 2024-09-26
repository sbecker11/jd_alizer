// FILEPATH: /Users/sbecker11/workspace-react/react-app/src/components/Footer.test.js

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'; 
import Footer from './Footer';

describe('Footer', () => {

    it('renders without crashing', () => {
        render(<Router><Footer /></Router>);
    });

});