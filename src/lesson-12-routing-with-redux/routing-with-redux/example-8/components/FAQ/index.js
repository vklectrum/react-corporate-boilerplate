// Core
import React, { Component } from 'react';
import { log } from 'helpers';

export default class FAQ extends Component {
    render () {
        log('FAQ component props → ', 'fff456', this.props);

        return <h1>FAQ</h1>;
    }
}
