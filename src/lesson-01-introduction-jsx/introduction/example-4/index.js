import React from 'react';

const element1 = React.createElement(
    'h1',
    {
        style: {
            color:      'firebrick',
            userSelect: 'none',
            cursor:     'pointer',
        },
        onClick: () => console.log('click!'),
    },
    'I am a React element. I was produced by a createElement function.'
);

const element2 = React.createElement(
    'div',
    {
        title: 'A title!',
    },
    element1
);

export default element2;
