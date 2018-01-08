import React, { Component } from 'react';
import Child from './Child';

export default class Example extends Component {
    static defaultProps = {
        welcomeMessage: 'Greeting!',
    };

    state = {
        text: 'Lorem ipusm dolor sit amet!',
    };

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
