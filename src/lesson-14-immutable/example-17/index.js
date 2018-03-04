// Core
import { List } from 'immutable';

const list1 = List();
let list2 = null;
let list3 = null;

const unknownSize = 1000000;

console.time('• 1 •');
for (let i = 0; i < unknownSize; i++) {
    list2 = list1.push(i);
}
console.timeEnd('• 1 •');

console.time('• 2 •');
list3 = list2.withMutations((mutatable) => {
    for (let i = 0; i < unknownSize; i++) {
        mutatable.push(unknownSize);
    }
});
console.timeEnd('• 2 •');
