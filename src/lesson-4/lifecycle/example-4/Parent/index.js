import React, { Component, Fragment } from 'react';
import Child from '../Child';
import { log, parent } from 'helpers';


export default class Parent extends Component {
    constructor () {
        super();

        this.state = {
            count: 0,
        };

        log('• parent constructor •', parent);

        this.increment = this._increment.bind(this);
    }

    componentWillMount () {
        log('• parent componentWillMount •', parent);
    }

    componentDidMount () {
        log('• parent componentDidMount •', parent);
    }

    _increment () {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    }

    render () {
        const { count } = this.state;

        log('• parent render •', parent);

        return (
            <Fragment>
                <h1>Updating phase</h1>
                <br />
                <button onClick = { this.increment }>Increment!</button>
                <Child count = { count } />
            </Fragment>
        );
    }
}
