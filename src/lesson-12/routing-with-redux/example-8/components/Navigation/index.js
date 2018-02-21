// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { log } from 'helpers';

// Instruments
import Styles from './styles';

export default class Navigation extends Component {
    render () {
        log('Navigation component props → ', 'fedf45', this.props);

        return (
            <section className = { Styles.navigation }>
                <NavLink activeClassName = { Styles.active } to = '/home'>
                    Home →
                </NavLink>
                <br />
                <NavLink activeClassName = { Styles.active } to = '/faq'>
                    FAQ →
                </NavLink>
                <br />
                <NavLink activeClassName = { Styles.active } to = '/contact/'>
                    Contact →
                </NavLink>
                <br />
                <NavLink
                    replace
                    activeClassName = { Styles.active }
                    to = { {
                        pathname: '/somewhere',
                        search:   '?some=search',
                        hash:     '#howdy',
                        state:    {
                            meta:          'information for modal',
                            fromDashboard: true,
                        },
                    } }>
                    Somewhere else →
                </NavLink>
            </section>
        );
    }
}
