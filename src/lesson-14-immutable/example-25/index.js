// Core
import { Range } from 'immutable';

const range1 = Range();
const range2 = Range(5, 10);
const range3 = Range(5, 100, 3);
const list1 = range2.toList();
const list2 = range3.toList();

console.log('• range1 •', range1);
console.log('• range2 •', range2);
console.log('• range3 •', range3);
console.log('• list1 •', list1);
console.log('• list2 •', list2);
