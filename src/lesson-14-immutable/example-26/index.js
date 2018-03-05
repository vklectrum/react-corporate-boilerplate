// Core
import { List, Seq, Range, Map } from 'immutable';

// Instruments
import { measure } from 'helpers';

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

const size = 100000;
const list = Range(1, size).toList();
const range = Range(1, size);
const seq = Seq([...Array(size).keys()]);

console.log('• list •', list);
console.log('• range •', range);
console.log('• seq •', seq);

measure(() => {
    list.filter((x) => x % 2 !== 0).map((x) => x * x);
}, 'list');

measure(() => {
    range.filter((x) => x % 2 !== 0).map((x) => x * x);
}, 'range');

measure(() => {
    seq.filter((x) => x % 2 !== 0).map((x) => x * x);
}, 'seq');

const map = Map({ a: 1, b: 2, c: 3 });
const squareOddValuesList = List(
    map
        .valueSeq()
        .filter((val) => val % 2 === 1)
        .map((val) => val * val),
);
console.log('• squareOddValuesList •', squareOddValuesList);

let range4 = null;
measure(() => {
    range4 = Range()
        .skip(1000)
        .map((n) => n ** 2)
        .filter((n) => n % 2 === 0)
        .take(2)
        .reduce((r, n) => r * n, 1);
}, 'range4');
console.log('• range4 •', range4);
