import React, { Component } from 'react';

export default class Example extends Component {
    render () {
        return (
            <button
                onClick = { (event) => console.log('• event •', event.type) }>
                Click!
            </button>
        );
    }
}
