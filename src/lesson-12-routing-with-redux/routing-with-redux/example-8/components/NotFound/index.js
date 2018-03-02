// Core
import React, { Component } from 'react';
import { log } from 'helpers';

export default class NotFound extends Component {
    render () {
        log('NotFound component props → ', 'fff456', this.props);

        return <h1>There is nobody here.</h1>;
    }
}
