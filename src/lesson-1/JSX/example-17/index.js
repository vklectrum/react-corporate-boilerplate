import React from 'react';

const isPizzaOpen = true;

const element = isPizzaOpen
    ? <h1>Welcome to Super Pizza!</h1>
    : <h1>See you tomorrow!</h1>;

export default element;
