import React, { Component, Fragment } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Child from '../Child';
import { log, parent } from 'helpers';

export default class Parent extends Component {
    constructor () {
        super();

        log('• parent constructor •', parent);
    }

    render () {

        return (
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>
        );
    }
}
