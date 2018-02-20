// Instruments
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { log } from 'helpers';

// Routes
import Routes from './routes';

render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById('root'),
);
