import React, { Component, Fragment } from 'react';
import Child from '../Child';
import { log, parent } from 'helpers';

export default class Parent extends Component {
    constructor () {
        super();

        this.state = {
            count:        0,
            showingChild: true,
        };

        log('• parent constructor •', parent);

        this.increment = this._increment.bind(this);
    }

    componentWillMount () {
        log('• parent componentWillMount •', parent);
    }

    componentDidMount () {
        log('• parent componentDidMount •', parent);

        this.timer = setInterval(() => this.forceUpdate(), 1000);

        setTimeout(() => clearInterval(this.timer), 1000);
    }

    shouldComponentUpdate (nextProps, nextState, nextContext) {
        log(`• parent shouldComponentUpdate •`, parent);

        console.log(
            ' • Parent will update: •',
            JSON.stringify(nextProps) !== JSON.stringify(this.props)
        );

        return true;
    }

    componentWillUpdate (nextProps, nextState, nextContext) {
        log(`• parent componentWillUpdate •`, parent);
    }

    componentDidUpdate (prevProps, prevState) {
        const { count } = prevProps;

        log(`• parent componentDidUpdate •`, parent);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    _increment () {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    }

    showChild = () => {
        this.setState(() => ({
            showingChild: true,
        }));
    };

    hideChild = () => {
        this.setState(() => ({
            showingChild: false,
        }));
    };

    render () {
        const { count, showingChild } = this.state;

        log('• parent render •', parent);

        return (
            <Fragment>
                <h1>Updating phase</h1>
                <br />
                <button onClick = { this.increment }>Increment!</button>
                <button onClick = { this.showChild }>Show child</button>
                <button onClick = { this.hideChild }>Hide child</button>
                {showingChild && <Child count = { count } />}
            </Fragment>
        );
    }
}
