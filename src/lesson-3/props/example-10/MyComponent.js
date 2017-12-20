// Core
import { Component } from 'react';
import { string } from 'prop-types';

export default class MyComponent extends Component {
    static defaultProps = {
        message: 'A fallback prop initialization in a class component',
    };

    static propTypes = {
        message: string.isRequired,
    };

    render () {
        const { message } = this.props;

        return message;
    }
}
