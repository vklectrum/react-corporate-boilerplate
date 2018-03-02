import React from 'react';

const element1 = React.createElement(
    'h1',
    null,
    'I am a React element. I was produced by a createElement function.'
);

const element2 = React.createElement('div', null, element1);

export default element2;
