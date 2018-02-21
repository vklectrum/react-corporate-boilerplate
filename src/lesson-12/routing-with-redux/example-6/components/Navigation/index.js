// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Instruments
import Styles from './styles';

export default class Navigation extends Component {
    render () {
        return (
            <section className = { Styles.navigation }>
                <Link to = '/home'>Home →</Link>
                <br />
                <Link to = '/faq'>FAQ →</Link>
                <br />
            </section>
        );
    }
}
