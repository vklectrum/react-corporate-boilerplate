// Core
import { Component } from 'react';

export default class MyComponent extends Component {
    static defaultProps = {
        message: 'A fallback prop initialization in a class component',
    };
    render () {
        const { message } = this.props;

        return message;
    }
}
