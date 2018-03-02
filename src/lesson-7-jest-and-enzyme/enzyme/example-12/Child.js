import React, { Component } from 'react';
import { string } from 'prop-types';

export default class Child extends Component {
    static contextTypes = {
        message: string.isRequired,
    };

    render () {
        const { message } = this.context;

        return <h1>{message}</h1>;
    }
}
