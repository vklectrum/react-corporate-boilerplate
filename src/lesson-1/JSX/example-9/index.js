import React from 'react';

const items = ['a ball', 'a sword', 'a brush', 'a stick'];

const list = items.map((item, index) => <li key = { index }>{item}</li>);

const element = <ul>{list}</ul>;

export default element;
