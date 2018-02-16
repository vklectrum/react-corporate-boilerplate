import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Styles from './styles';

export default class Todo extends Component {
    state = { completed: false };

    _complete = () => this.setState(({ completed }) => ({ completed: !completed }));

    render () {
        const { completed } = this.state;

        return (
            <li className = { Styles.todo } >
                <Checkbox
                    checked = { completed }
                    color1 = '#363636'
                    color2 = '#fff'
                    onClick = { this._complete }
                />
                <code>Task completed</code>
            </li>
        );
    }
}
