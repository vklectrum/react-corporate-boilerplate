import React, { Component } from 'react';
import { number } from 'prop-types';

import Bookshelf from './Bookshelf';

let currentPage = 0;

export default class Library extends Component {
    static childContextTypes = {
        currentPage: number.isRequired,
    };

    getChildContext () {
        return { currentPage };
    }

    timer = setInterval(() => {
        currentPage += 1;

        this.forceUpdate();
    }, 1000);

    render () {
        return <Bookshelf />;
    }
}
