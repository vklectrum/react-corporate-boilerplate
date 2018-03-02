import React, { Component } from 'react';

export default class Example extends Component {
    state = {
        name: 'Merlin',
        age:  5000,
    };

    componentDidMount () {
        setTimeout(() => {
            console.log('• before state update •', this.state.age);

            // :(
            this.setState({
                age: ++this.state.age,
            });

            console.log('• after state update •', this.state.age);
        }, 2000);
    }

    render () {
        const { name, age } = this.state;

        console.log('• render •', this.state.age);

        return (
            <h1>
                Greetings! I am {name} and I am {age} years old!
            </h1>
        );
    }
}
