// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles';
import { logout } from '../../../core/actions/auth';

class Navigation extends Component {
    _handleLogout = () => this.props.logout()

    render () {
        return (
            <section className = { Styles.navigation }>
                <NavLink activeClassName = { Styles.active } to = '/feed'>
                    Feed →
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
                <button onClick = { this._handleLogout } >
                    Logout
                </button>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch);

export default connect(null, mapDispatchToProps)(Navigation);
