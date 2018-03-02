import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Page from '../Page';

const Book = (_, { booksData }) => (
    <ul>{booksData.map(({ title, id }) => <Page key = { id } title = { title } />)}</ul>
);

Book.contextTypes = {
    booksData: arrayOf(
        shape({
            id:    string.isRequired,
            title: string.isRequired,
        })
    ),
};

export default Book;
