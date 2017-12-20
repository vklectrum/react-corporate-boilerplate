import React, { Component } from 'react';

export default class Example extends Component {
    state = {
        name: 'Gendalf the Gray',
        age:  5000,
    };

    componentDidMount () {
        setTimeout(
            () =>
                this.setState(() => ({
                    name:   'Gendalf',
                    status: 'the White',
                })),
            2000
        );
    }

    render () {
        const { name, age, status } = this.state;

        console.log('•λ•', status);

        return (
            <h1>
                Greetings! I am {name} {status} and I am {age} years old!
            </h1>
        );
    }
}
