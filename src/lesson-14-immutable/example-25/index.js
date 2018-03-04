// Core
import { List, Seq, Range, Map } from 'immutable';

const range1 = Range();
const range2 = Range(5, 10);
const range3 = Range(5, 100, 3);
const list1 = range2.toList();
const list2 = range3.toList();

console.log('• range1 •', range1);
console.log('• range2 •', range2);
console.log('• list1 •', list1);
console.log('• list2 •', list2);

console.log('•--- --- •');

const size = 10000;
const list = Range(1, size).toList();
const range = Range(1, size);
const seq = Seq([...Array(size).keys()]);

console.log('• list •', list);
console.log('• range •', range);
console.log('• seq •', seq);

console.time('list');
list.filter((x) => x % 2 !== 0).map((x) => x * x);
console.timeEnd('list');

console.time('range');
range.filter((x) => x % 2 !== 0).map((x) => x * x);
console.timeEnd('range');

console.time('seq');
seq.filter((x) => x % 2 !== 0).map((x) => x * x);
console.timeEnd('seq');

const map = Map({ a: 1, b: 2, c: 3 });
const squareOddValuesList = List(
    myMap
        .valueSeq()
        .filter((val) => val % 2 === 1)
        .map((val) => val * val),
);
console.log('•λ•', squareOddValuesList);
