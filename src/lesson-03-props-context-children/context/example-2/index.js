import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Bookshelf from './Bookshelf';

const booksData = [
    { id: '123', title: 'Konan' },
    { id: '234', title: 'Harry Potter' },
    { id: '345', title: 'Robinzon Kruzo' }
];

export default class Library extends Component {
    static childContextTypes = {
        booksData: arrayOf(
            shape({
                id:    string.isRequired,
                title: string.isRequired,
            })
        ),
    };

    getChildContext () {
        return { booksData };
    }

    render () {
        return <Bookshelf />;
    }
}
