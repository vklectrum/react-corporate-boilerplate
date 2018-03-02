import React, { Component } from 'react';
import Child from '../Child';
import { log, parent } from 'helpers';

export default class Parent extends Component {
    constructor () {
        super();

        log('• parent constructor •', parent);
    }

    componentWillMount () {
        log('• parent componentWillMount •', parent);
    }

    componentDidMount () {
        log('• parent componentDidMount •', parent);
    }

    render () {
        log('• parent render •', parent);

        return <Child />;
    }
}
