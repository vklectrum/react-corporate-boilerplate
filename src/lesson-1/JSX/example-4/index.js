import React from 'react';

const getMessage = (year = 2018) => `Welcome in ${year}!`;

const element = <h1>{getMessage(2020)}</h1>;

export default element;
