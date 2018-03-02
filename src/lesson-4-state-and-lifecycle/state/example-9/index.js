import React, { Component } from 'react';

export default class Example extends Component {
    state = {
        name: 'Merlin',
        age:  5000,
    };

    render () {
        const { name, age } = this.state;

        // :(
        // this.setState({
        //     age: 5001,
        // });

        return (
            <h1>
                Greetings! I am {name} and I am {age} years old!
            </h1>
        );
    }
}
