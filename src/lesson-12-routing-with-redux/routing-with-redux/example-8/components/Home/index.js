// Core
import React, { Component } from 'react';
import { log } from 'helpers';

export default class Home extends Component {
    render () {
        log('Home component props → ', 'fff456', this.props);

        return <h1>Home</h1>;
    }
}
