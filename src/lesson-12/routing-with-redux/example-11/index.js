// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { log } from 'helpers';

// Instruments
import store, { history } from '../core/store';

// Routes
import Routes from './routes';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
