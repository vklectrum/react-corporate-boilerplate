// Core
import React, { Component } from 'react';

export default class Login extends Component {
    _handleLogin = () => this.props.login();

    render () {
        return (
            <section>
                <h1>Login</h1>
                <button onClick = { this._handleLogin }>Log in!</button>
            </section>
        );
    }
}
