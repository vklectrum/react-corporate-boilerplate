import React, { Component } from 'react';
import { string } from 'prop-types';

export default class Child extends Component {
    static contextTypes = {
        contextMessage: string.isRequired,
    };

    static defaultProps = {
        propsMessage2: 'Message from props 2!',
    };

    constructor () { // props and context may be passed as parameters
        super(); // props and context may be passed as arguments

        console.log(
            '• child constructor with props and context •',
            this.props,
            this.context
        );
    }

    componentWillMount () {
        console.log('• child componentWillMount •');
    }

    componentDidMount () {
        console.log('• child componentDidMount •');
    }

    render () {
        console.log('• child render •', this.props, this.context);

        return <h1>Initailization phase</h1>;
    }
}
