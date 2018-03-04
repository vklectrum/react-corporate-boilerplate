// Core
import { List } from 'immutable';
import { sum, memoizeBad, measure } from 'helpers';

const memoSum = memoizeBad(sum);

const list1 = List([...Array(1000000).keys()]);

measure(() => memoSum(list1), '• list •');
measure(() => memoSum(list1), '• list •'); // Free!

const list2 = list1.push(1);

measure(() => memoSum(list2), '• list 2•');
measure(() => memoSum(list2), '• list 2•'); // Free!
