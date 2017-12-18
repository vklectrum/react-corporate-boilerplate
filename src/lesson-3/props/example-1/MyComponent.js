// Core
import React, { Component } from 'react';

export default class MyComponent extends Component {
    render () {
        const { message } = this.props;

        return <h1>{message}</h1>;
    }
}
