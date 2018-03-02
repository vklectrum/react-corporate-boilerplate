// Core
import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

// Instruments
import Styles from './styles';

// @withRouter
// @connect()
class Navigation extends Component {
    // shouldComponentUpdate (nProps, nState) {
    //     return (
    //         JSON.stringify(nProps) !== JSON.stringify(this.props) ||
    //         JSON.stringify(nState) !== JSON.stringify(this.state)
    //     );
    // }

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

export default connect()(Navigation);
// export default withRouter(connect()(Navigation));
