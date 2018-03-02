import React, { Component } from 'react';
import { string } from 'prop-types';

export default class Example extends Component {
    state = {
        text: 'Lorem ipusm dolor sit amet!',
    };

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    render () {
        const { text } = this.state;

        return (
            <section>
                <h1>Welcome!</h1>
                <p>{text}</p>
                <input
                    type = 'text'
                    value = { text }
                    onChange = { this.handleInputChange }
                />
            </section>
        );
    }
}
