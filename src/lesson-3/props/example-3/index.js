import React, { Component } from 'react';

import MyComponent from './MyComponent';

const message = 'Reading props using a functional component';

export default class Example extends Component {
    render () {
        return <MyComponent message = { message } />;
    }
}
