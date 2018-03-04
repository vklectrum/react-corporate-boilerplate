// Core
import { Map, is } from 'immutable';

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
