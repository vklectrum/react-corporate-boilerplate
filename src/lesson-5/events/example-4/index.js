import React, { Component } from 'react';

export default class Example extends Component {
    constructor () {
        super();

        this.handleInnerWheel = this._handleInnerWheel.bind(this);
        this.handleOuterWheel = this._handleOuterWheel.bind(this);
    }

    _handleInnerWheel (event) {
        console.log('• inner wheel event •', event.deltaX);
    }

    _handleOuterWheel (event) {
        console.log('• outer wheel event •', event.view);
    }

    render () {
        return (
            <section
                style = { { height: '50vh', backgroundColor: 'wheat' } }
                onWheel = { this.handleOuterWheel }>
                <button onWheel = { this.handleInnerWheel }>Click!</button>
            </section>
        );
    }
}
