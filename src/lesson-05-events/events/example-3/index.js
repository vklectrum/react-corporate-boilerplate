import React, { Component } from 'react';
import { log, parent, child } from 'helpers';

export default class Example extends Component {
    constructor () {
        super();

        this.handleInnerWheel = this._handleInnerWheel.bind(this);
        this.handleOuterWheel = this._handleOuterWheel.bind(this);
    }

    _handleInnerWheel (event) {
        log(event.deltaY, child);
    }

    _handleOuterWheel (event) {
        log(event.deltaY, parent);
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
