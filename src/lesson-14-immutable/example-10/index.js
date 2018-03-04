// Core
import { fromJS } from 'immutable';

// Instruments
import { measure } from 'helpers';

const list1 = fromJS([
    {
        cities: [
            {
                name: 'Londom',
            },
            { name: 'Oslo' }
        ],
    }
]);

let array1 = [];
measure(() => {
    array1 = list1.toArray();
}, 'list1.toArray()');

let array2 = [];
measure(() => {
    array2 = list1.toJS();
}, 'list1.toJS()');

console.log('• list1 •', list1);
console.log('• array1.toArray() •', array1);
console.log('• array2.toJS() •', array2);

console.log('•--- ---•');

const map1 = list1.toMap();

let object1 = {};
measure(() => {
    object1 = map1.toObject();
}, 'map1.toObject()');

let object2 = {};
measure(() => {
    object2 = map1.toJS();
}, 'map2.toJS()');

console.log('• map1 •', map1);
console.log('• object1 •', object1);
console.log('• object2 •', object2);

console.log('•--- ---•');

let json = [];
measure(() => {
    json = JSON.stringify(list1);
}, 'JSON.stringify(list1)');

console.log('• json •', json);
