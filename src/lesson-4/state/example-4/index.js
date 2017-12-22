import React, { Component } from 'react';

export default class Example extends Component {
    state = {
        name: 'Merlin',
        age:  5000,
    };

    componentDidMount () {
        const callback = () => console.log('the state object was update');

        setTimeout(
            () =>
                this.setState(
                    {
                        name: 'Gendalf',
                        age:  15000,
                    },
                    callback
                ),
            2000
        );
    }

    render () {
        const { name, age } = this.state;

        console.log('•λ•', 'render!');

        return (
            <h1>
                Greetings! I am {name} and I am {age} years old!
            </h1>
        );
    }
}
