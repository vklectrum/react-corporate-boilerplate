// Instruments
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { history } from './history';
import { log } from 'helpers';

// Routes
import Routes from './routes';

render(
    <Router history = { history }>
        <Routes />
    </Router>,
    document.getElementById('root'),
);
