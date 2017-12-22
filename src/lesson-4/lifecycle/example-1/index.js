import React, { Component } from 'react';

export default class Example extends Component {
    constructor () {
        super();

        console.log('• constructor •');
    }

    componentWillMount () {
        console.log('• componentWillMount •');
    }

    componentDidMount () {
        console.log('• componentDidMount •');
    }

    render () {
        console.log('• render •');

        return <h1>Initailization phase</h1>;
    }
}
