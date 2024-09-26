// FILEPATH: /Users/sbecker11/workspace-react/react-app/src/components/LoginRegister.test.js

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'; 
import LoginRegister from './LoginRegister';

export const onLoginRegisterClick = jest.fn();

describe('LoginRegister', () => {

    it('renders without crashing', () => {
        render(<Router><LoginRegister /></Router>);
    });

});

