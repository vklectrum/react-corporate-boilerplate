import React, { Component } from 'react';
import MyComponent from './MyComponent';

export default class Example extends Component {
    render () {
        return <MyComponent>{() => 'A child as a function!'}</MyComponent>;
    }
}
