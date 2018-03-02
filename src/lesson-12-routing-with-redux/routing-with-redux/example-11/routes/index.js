// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';

// Components
import Navigation from '../components/Navigation';
import Public from './Public';
import Private from './Private';

class Routes extends Component {
    componentDidMount () {
        const { authenticated, history } = this.props;

        if (!authenticated) {
            history.replace('/login');
        }
    }

    render () {
        const { authenticated } = this.props;

        return (
            <Switch>
                {authenticated && <Private />}
                <Public />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
});

export default withRouter(connect(mapStateToProps)(Routes));
