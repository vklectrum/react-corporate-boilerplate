import React, { Component } from 'react';
import { log, child } from 'helpers';

export default class Child extends Component {
    constructor () {
        super();

        log('• child constructor •', child);
    }

    componentWillMount () {
        log('• child componentWillMount •', child);
    }

    componentDidMount () {
        log('• child componentDidMount •', child);
    }

    render () {
        log('• child render •', child);

        return <h1>Initailization phase</h1>;
    }
}
