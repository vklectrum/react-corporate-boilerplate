import React, { Component, Fragment } from 'react';
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
        const { count } = this.props;

        log('• child render •', child);

        return <p>Count: {count}</p>;
    }
}
