// Core
import { List } from 'immutable';

const list = List([1, 2, 3]);
const list2 = list.push(4);

console.log('• list •', list);
console.log('• list2 •', list2);
console.log('• list === list2 •', list === list2);

// List.prototype.push = function (value) {
//     1) make a copy
//     const clone = deepCopy(this);
//
//     2) edit the copy
//     clone[clone.length] = value;
//
//     3) return the copy
//     return clone;
// };

// ?! медленно

// да.
