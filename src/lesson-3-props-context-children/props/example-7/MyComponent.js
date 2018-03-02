// Core
import { Component } from 'react';
import { string } from 'prop-types';

export default class MyComponent extends Component {
    static propTypes = {
        lastName:  string.isRequired,
        firstName: string,
    };

    render () {
        const { firstName, lastName } = this.props;

        return `${firstName} ${lastName}`;
    }
}
