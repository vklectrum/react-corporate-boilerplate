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

const applePrice1 = store1.get('apple').get('price');
const bananaPrice1 = store1.get('banana').get('price');

console.log('• applePrice1 •', applePrice1);
console.log('• bananaPrice1 •', bananaPrice1);

console.log(' --- ---');

const applePrice2 = store2.getIn(['apple', 'price']);
const bananaPrice2 = store2.getIn(['banana', 'price']);

console.log('• applePrice2 •', applePrice2);
console.log('• bananaPrice2 •', bananaPrice2);

console.log(' --- ---');

console.log('• applePrice1 === applePrice2 •', applePrice1 === applePrice2);
console.log('• bananaPrice1 === bananaPrice2 •', bananaPrice1 === bananaPrice2);
