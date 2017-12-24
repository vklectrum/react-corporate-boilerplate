import React, { Component } from 'react';

export default class Example extends Component {
    constructor () {
        super();

        this.handleClick1 = this._handleClick1.bind(this);
        this.handleClick2 = this._handleClick2.bind(this);
    }

    state = {
        inputValue: '',
    };

    _handleClick1 (event) {
        console.log('• click event 1 •', event.target.value);

        return false;
    }

    _handleClick2 (event) {
        event.preventDefault();

        console.log('• click event 2 •', event.ctrlKey);
    }

    render () {
        const { inputValue } = this.state;

        return (
            <section
                style = { {
                    height:          '50vh',
                    backgroundColor: 'wheat',
                    padding:         15,
                } }>
                <a href = 'https://www.google.com' onClick = { this.handleClick1 }>
                    Anchor 1
                </a>
                <br />
                <a href = 'https://www.google.com' onClick = { this.handleClick2 }>
                    Anchor 2
                </a>
            </section>
        );
    }
}
