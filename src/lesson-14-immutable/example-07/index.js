// Core
import { List } from 'immutable';
import { sum, memoize, memoizeBad, measure } from 'helpers';

console.log('• not efficient memoizaition •');
const memoSum1 = memoizeBad(sum);

const list1 = List([...Array(1000000).keys()]);

measure(() => memoSum1(list1), '• list1 •');
measure(() => memoSum1(list1), '• list1 •'); // Не так уж и бесплатно... :(

const list2 = list1.push(1);

measure(() => memoSum1(list2), '• list 2•');
measure(() => memoSum1(list2), '• list 2•');  // Не так уж и бесплатно... :(


console.log('• efficient memoizaition •');

const memoSum2 = memoize(sum);

measure(() => memoSum2(list2), '• list2 •');
measure(() => memoSum2(list2), '• list2 •'); // Бесплатно! :)

const list3 = list2.push(1);

measure(() => memoSum2(list3), '• list3 •');
measure(() => memoSum2(list3), '• list3 •'); // Бесплатно! :)