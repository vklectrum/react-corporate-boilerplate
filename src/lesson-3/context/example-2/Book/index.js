import React from 'react';

import Page from '../Page';

const Book = (_, { booksData }) => (
    <ul>{booksData.map(({ title, id }) => <Page key = { id } title = { title } />)}</ul>
);

export default Book;
