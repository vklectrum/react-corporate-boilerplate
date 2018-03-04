// Core
import { List } from 'immutable';

// Instruments
import { measure } from '../../helpers';

const array = [];

measure(() => {
    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }
}, 'array push 1');

let list = List();

measure(() => {
    for (let i = 0; i < 1000000; i++) {
        list = list.push(i);
    }
}, 'list push 1');

measure(array.push(1), 'array push 2');

measure(list = list.push(1), 'list push 2');
