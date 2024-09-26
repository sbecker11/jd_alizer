// FILEPATH: /Users/sbecker11/workspace-react/react-app/src/components/About.test.js

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'; 
import About from './About';

export const onAboutClick = jest.fn();

describe('About', () => {

    it('renders without crashing', () => {
        render(<Router><About /></Router>);
    });

});