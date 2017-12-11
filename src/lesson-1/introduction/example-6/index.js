import React from 'react';

const element = React.createElement(
    'h1',
    null,
    'I am a React element. I was produced by a createElement function.'
);

element.test = 'hello';

export default element;
