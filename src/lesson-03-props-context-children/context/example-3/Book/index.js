import React from 'react';
import { number } from 'prop-types';

import Page from '../Page';

const Book = (_, { currentPage }) => (
    <ul>
        <Page currentPage = { currentPage } />
    </ul>
);

Book.contextTypes = {
    currentPage: number.isRequired,
};

export default Book;
