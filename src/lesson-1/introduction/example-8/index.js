import React from 'react';

class ClassComponent extends React.Component {
    render () {
        return React.createElement('h1', null, 'I am a class component!');
    }
}

const FunctionalComponent = () =>
    React.createElement('h1', null, 'I am a functional component!');

export default [<ClassComponent key = '0' />, <FunctionalComponent key = '1' />];
