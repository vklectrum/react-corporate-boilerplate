/* eslint-disable react/jsx-pascal-case */

// Core
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

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
                {/*<Navigation />*/}
                <Route component = { Navigation } path = '/' />
                <Switch>
                    <Route exact component = { Home } path = '/home' />
                    <Route exact path = '/faq' render = { (props) => <FAQ { ...props } /> } />
                    <Route
                        sensitive
                        strict
                        path = '/contact/'
                        render = { (props) => <Contact { ...props } /> }
                    />
                    <Route component = { NotFound } />
                </Switch>
            </Fragment>
        );
    }
}
