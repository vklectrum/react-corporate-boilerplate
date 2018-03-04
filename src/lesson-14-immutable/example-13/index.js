// Core
import { Map, is, List } from 'immutable';

// Instruments
import { measure } from 'helpers';

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

console.log('• obj1 === obj2 •', obj1 === obj2);

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
const map3 = map1.set('a', 2);

console.log('• map1 === map2 •', map1 === map2);
console.log('• map1.equals(map2) •', map1.equals(map2));
console.log('• is(map1, map2) •', is(map1, map2));
console.log('• is(map1, map3) •', is(map1, map3));

const list1 = List([...Array(10000).keys()]);
const list2 = List([...Array(10000).keys()]);

measure(() => {
    list1 === list2;
}, '===');

measure(() => {
    is(list1, list2);
}, 'is');
