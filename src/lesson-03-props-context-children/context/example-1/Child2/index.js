import { Component } from 'react';
import { string } from 'prop-types';

export default class Child2 extends Component {
    static contextTypes = {
        firstName: string.isRequired,
        lastName:  string.isRequired,
    }

    render () {
        const { firstName, lastName } = this.context;

        return `${firstName} ${lastName}`;
    }
}
