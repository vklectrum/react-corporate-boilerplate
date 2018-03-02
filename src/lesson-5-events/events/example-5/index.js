import React, { Component } from 'react';

export default class Example extends Component {
    constructor () {
        super();

        this.handleClick = this._handleClick.bind(this);
        this.handleWheel = this._handleWheel.bind(this);
    }

    _handleClick (event) {
        console.log('• click event •', event.shiftKey);
    }

    _handleWheel (event) {
        console.log('• wheel event •', event.shiftKey);
    }

    render () {
        return (
            <section
                style = { { height: '50vh', backgroundColor: 'wheat' } }
                onWheel = { this.handleWheel }>
                <button onClick = { this.handleClick }>Click!</button>
            </section>
        );
    }
}
