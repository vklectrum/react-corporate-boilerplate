// Core
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import FAQ from '../components/FAQ';

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <Navigation />
                <Route exact component = { Home } path = '/home' />
                <Route exact component = { FAQ } path = '/faq' />
            </Fragment>
        );
    }
}
