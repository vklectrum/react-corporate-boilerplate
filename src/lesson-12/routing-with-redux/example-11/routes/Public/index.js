// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// Instruments
import * as actions from '../../../core/actions/auth';

// Components
import Login from '../../components/Login';

class Public extends Component {
    render () {
        const { login } = this.props;

        return (
            <Switch>
                <Route exact render = { (props) => <Login login = { login } { ...props } /> } to = '/login' />
                <Redirect to = '/login' />
            </Switch>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Public);
