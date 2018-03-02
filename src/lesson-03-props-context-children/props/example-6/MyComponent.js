// Core
import React from 'react';

const MyComponent = ({ visible, firstName, lastName }) =>
    visible && (
        <ul>
            <li>
                First name: <b>{firstName}</b>
            </li>
            <li>
                Last name: <b>{lastName}</b>
            </li>
        </ul>
    );

export default MyComponent;
