import React, { Component } from 'react';

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
            </section>
        );
    }
}
