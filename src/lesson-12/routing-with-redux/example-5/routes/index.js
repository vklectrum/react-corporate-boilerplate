// Core
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Instruments
import { history } from '../history';

// Components
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import FAQ from '../components/FAQ';

export default class Example extends Component {
    componentDidMount () {
        const { location: { pathname }} = history;
        if (pathname !== '/home' && pathname !== '/faq') {
            history.replace('/home');
        }
    }

    render () {
        return (
            <Fragment>
                <Navigation />
                <Route component = { Home } path = '/home' />
                <Route exact component = { FAQ } path = '/faq' />
            </Fragment>
        );
    }
}
