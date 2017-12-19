import React, { Component } from 'react';
import { string } from 'prop-types';

import Child1 from './Child1';

const data = {
    firstName: 'Walter',
    lastName:  'White',
};

export default class Parent extends Component {
    static childContextTypes = {
        firstName: string.isRequired,
        lastName:  string.isRequired,
    };

    getChildContext () {
        return data;
    }

    render () {
        return <Child1 />;
    }
}
