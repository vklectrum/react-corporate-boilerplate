// Core
import React, { Component } from 'react';
import { log } from 'helpers';

export default class Contact extends Component {
    render () {
        log('Contact component props → ', 'fff456', this.props);

        return <h1>Contact</h1>;
    }
}
