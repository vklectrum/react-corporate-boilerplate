import React, { Component } from 'react';
import { string } from 'prop-types';
import Child from '../Child';

export default class Parent extends Component {
    static childContextTypes = {
        contextMessage: string.isRequired,
    };

    constructor () {
        super();

        console.log('• parent constructor •');
    }

    getChildContext () {
        return {
            contextMessage: 'Message from context!',
        };
    }

    componentWillMount () {
        console.log('• parent componentWillMount •');
    }

    componentDidMount () {
        console.log('• parent componentDidMount •');
    }

    render () {
        console.log('• parent render •');

        return <Child propsMessage1 = 'Message from props 1!' />;
    }
}
