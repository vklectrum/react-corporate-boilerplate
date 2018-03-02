import React, { Component, Fragment } from 'react';

import MyComponent from './MyComponent';

const data = {
    firstName:       'Walter',
    lastName:        'White',
    age:             19,
    favoriteAffairs: [
        {
            id:          '123',
            description: { type: 'Baseball', value: 44 },
        },

        { id: '456', description: { type: 'Football', value: 45 }}
    ],
};

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <MyComponent { ...data } />
            </Fragment>
        );
    }
}
