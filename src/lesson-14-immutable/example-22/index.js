// Core
import { Map, List } from 'immutable';

const list = List.of('hello', 'world', '!');
const map = Map({
    name: 'Jack',
    age:  33,
});

const [, world] = list;
const { name } = map;

console.log('• world •', world);
console.log('• age •', name);
