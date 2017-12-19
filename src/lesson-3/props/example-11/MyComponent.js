// Core
import React from 'react';

const MyComponent = ({ message }) => <h1>{message}</h1>;

MyComponent.defaultProps = {
    message: 'A fallback prop initialization in a functional component',
};

export default MyComponent;
