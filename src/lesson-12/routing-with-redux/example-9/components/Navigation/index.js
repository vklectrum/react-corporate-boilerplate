// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles';

export default class Navigation extends Component {
    render () {
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
                <NavLink replace activeClassName = { Styles.active } to = '/no...'>
                    Somewhere else →
                </NavLink>
            </section>
        );
    }
}
