// Core
import { Map, Set, is } from 'immutable';

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
const set = Set().add(map1); // проверка по значению (value), не по ссылке (reference)

console.log('• set.has(map2) •', set.has(map2));
