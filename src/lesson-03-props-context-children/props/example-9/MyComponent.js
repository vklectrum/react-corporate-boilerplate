// Core
import React from 'react';
import { string, number, shape, arrayOf } from 'prop-types';

const MyComponent = ({ firstName, lastName, age, favoriteAffairs }) => {
    const affairs = favoriteAffairs.map(
        ({ id, description: { type, value }}) => (
            <li key = { id }>
                Type: {type}, value: {value}
            </li>
        )
    );

    return (
        <section>
            Hello! I am {firstName} {lastName}, and I am {age}.
            <br />
            <ul>{affairs}</ul>
        </section>
    );
};

MyComponent.propTypes = {
    age:             number.isRequired,
    firstName:       string.isRequired,
    lastName:        string.isRequired,
    favoriteAffairs: arrayOf(
        shape({
            id:          string.isRequired,
            description: shape({
                type:  string.isRequired,
                value: number.isRequired,
            }),
        })
    ),
};

export default MyComponent;
