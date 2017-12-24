import React, { Component } from 'react';

export default class Example extends Component {
    constructor () {
        super();

        this.handleClick = this._handleClick.bind(this);
    }

    _handleClick (event) {
        console.log('• event •', event.type);
    }

    render () {
        return <button onClick = { this.handleClick }>Click!</button>;
    }
}
