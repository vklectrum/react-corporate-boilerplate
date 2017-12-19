import React, { Component, Fragment } from 'react';

import MyComponent from './MyComponent';

const person1 = {
    firstName: 'Walter',
    lastName:  'White',
};

const person2 = {
    firstName: 'Jesse',
    lastName:  'Pinkman',
};

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <MyComponent visible = { false } { ...person1 } />
                <MyComponent visible { ...person2 } />
            </Fragment>
        );
    }
}
