import React, { PureComponent, Fragment } from 'react';
import { log, child } from 'helpers';

export default class Child extends PureComponent {
    constructor () {
        super();

        log('• child constructor •', child);
        this.customMethod = this._customMethod.bind(this);
    }

    componentDidMount () {
        log('• child componentDidMount •', child);
    }

    _customMethod () {
        console.log('• a custom method •');
    }

    render () {
        // throw new Error('erorr!');

        return <h1 onClick = { this.customMethod }>A child!</h1>;
    }
}
