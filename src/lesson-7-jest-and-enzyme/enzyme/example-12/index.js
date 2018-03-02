import React, { Component } from 'react';
import { string } from 'prop-types';
import Child from './Child';

export default class Example extends Component {
    static defaultProps = {
        welcomeMessage: 'Greeting!',
    };

    static childContextTypes = {
        message: string.isRequired,
    };

    state = {
        text: 'Lorem ipusm dolor sit amet!',
    };

    getChildContext () {
        return {
            message: 'Hi there!',
        };
    }


    render () {
        const { welcomeMessage } = this.props;
        const { text } = this.state;

        return (
            <section>
                <h1>{welcomeMessage}</h1>
                <p>{text}</p>
                <Child />
            </section>
        );
    }
}
