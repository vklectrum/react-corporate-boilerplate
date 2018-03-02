import React, { Component } from 'react';
import MyComponent from './MyComponent';

export default class Example extends Component {
    render () {
        return (
            <MyComponent>
                <p>Lorem ipsum</p>
                <p>dolor</p>
                <p>sit amet!</p>
            </MyComponent>
        );
    }
}
