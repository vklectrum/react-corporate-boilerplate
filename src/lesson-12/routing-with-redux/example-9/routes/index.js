// Core
import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <Route component = { Navigation } path = '/' />
                <Switch>
                    <Route exact component = { Home } path = '/home' />
                    <Route exact component = { FAQ } path = '/faq' />
                    <Route sensitive strict component = { Contact } path = '/contact/' />
                    <Route exact component = { NotFound } path = '/404' />
                    <Redirect from = '/custom' to = '/home' />
                    <Redirect push to = '/404' />
                </Switch>
            </Fragment>
        );
    }
}
