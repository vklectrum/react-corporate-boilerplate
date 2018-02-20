// Core
import React, { Component } from 'react';

// Instruments
import { history } from '../../history';
import Styles from './styles';

export default class Navigation extends Component {
    _navigateToHome = () => history.push('/home');
    _navigateToFAQ = () => history.push('/faq');
    _navigateToFAQNested = () => history.push('/faq/deeply/nested/question');

    render () {
        return (
            <section className = { Styles.navigation }>
                <button onClick = { this._navigateToHome }>Home →</button>
                <button onClick = { this._navigateToFAQ }>FAQ →</button>
                <button onClick = { this._navigateToFAQNested }>FAQ nested →</button>
            </section>
        );
    }
}
