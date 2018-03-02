import React, { Component } from 'react';

import Book from '../Book';

export default class Bookshelf extends Component {
    shouldComponentUpdate () {
        return false;
    }

    render () {
        return <Book />;
    }
}
