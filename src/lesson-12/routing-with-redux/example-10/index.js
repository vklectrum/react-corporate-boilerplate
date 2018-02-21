// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { log } from 'helpers';

// Instruments
import store from '../core/store';

// Routes
import Routes from './routes';

render(
    <Provider store = { store }>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
