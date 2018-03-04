// Core
import { Map } from 'immutable';

const store1 = Map({
    apple: Map({
        price: 10,
    }),
    banana: Map({
        price: 20,
    }),
});

const store2 = store1.setIn(['apple', 'price'], 500);

console.log('• store1 •', store1);
console.log('• store2 •', store2);
console.log('• store1 === store2 •', store1 === store2);

console.log(' --- ---');

const apple1 = store1.get('apple');
const banana1 = store1.get('banana');

console.log('• apple1 •', apple1);
console.log('• banana1 •', banana1);

console.log(' --- ---');

const apple2 = store2.get('apple');
const banana2 = store2.get('banana');

console.log('• apple2 •', apple2);
console.log('• banana2 •', banana2);

console.log(' --- ---');

console.log('• apple1 === apple2 •', apple1 === apple2);
console.log('• banana1 === banana2 •', banana1 === banana2);
