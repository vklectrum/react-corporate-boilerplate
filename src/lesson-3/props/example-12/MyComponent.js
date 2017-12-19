// Core
import React from 'react';

const MyComponent = (props) => {
    props.test = 'error!';
    props.person.deepTest = 'no error :(';

    console.log('•λ•', props);

    return <h1>{props.message}</h1>;
};

export default MyComponent;
