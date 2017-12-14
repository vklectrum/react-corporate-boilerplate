import React from 'react';

const getGreeting = (isPizzaOpen) =>
    isPizzaOpen
        ? <h1>Welcome to Super Pizza!</h1>
        : <h1>See you tomorrow!</h1>;

const element = getGreeting(false);

export default element;
