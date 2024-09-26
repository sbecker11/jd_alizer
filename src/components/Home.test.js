// FILEPATH: /Users/sbecker11/workspace-react/react-app/src/components/Home.test.js

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'; 
import Home from './Home';

export const onHomeClick = jest.fn();

describe('Home', () => {

    it('renders without crashing', () => {
        render(<Router><Home /></Router>);
    });

});