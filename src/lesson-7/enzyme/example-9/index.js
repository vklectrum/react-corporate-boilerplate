import React, { Component } from 'react';
import Child from './Child';

export default class Example extends Component {
    static defaultProps = {
        welcomeMessage: 'Greeting!',
    };

    render () {
        const { welcomeMessage } = this.props;

        return (
            <section>
                <h1>{welcomeMessage}</h1>
                <p>Lorem ipusm dolor sit amet!</p>
                <Child />
            </section>
        );
    }
}
