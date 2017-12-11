import React from 'react';

const element = (
    <ul>
        <li>{undefined}</li>
        <li>{null}</li>
        <li>{true}</li>
        <li>{false}</li>
        <li>{0}</li>
        <li>{1}</li>
        <li>''</li>
        <li>' '</li>
        <li>{''}</li>
        <li />
        <li>{}</li>
        <li>{['hello', ' ', '.', '    ', <span key = '0'>hello</span>]}</li>
        <li></li>
        <li />
    </ul>
);

export default element;
