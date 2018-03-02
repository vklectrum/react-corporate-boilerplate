import React, { Component } from 'react';

import MyComponent from './MyComponent';

export default class Example extends Component {
    render () {
        return (
            <MyComponent message = 'Reading props using a class component' />
        );
    }
}
