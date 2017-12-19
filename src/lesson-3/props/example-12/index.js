import React, { Component } from 'react';

import MyComponent from './MyComponent';

const person = {
    firstName: 'Walter',
    lastName:  'White',
};

export default class Example extends Component {
    render () {
        return <MyComponent message = 'Props are read-only!' person = { person } />;
    }
}
