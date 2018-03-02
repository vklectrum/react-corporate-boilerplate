import React, { Component } from 'react';

import MyComponent from './MyComponent';

const data = {
    firstName: 'Walter',
    lastName:  'White',
};

export default class Example extends Component {
    render () {
        return <MyComponent { ...data } />;
    }
}
