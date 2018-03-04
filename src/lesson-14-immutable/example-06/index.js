// Core
import { sum, memoize, measure } from 'helpers';

const memoSum = memoize(sum);

const array1 = [...Array(1000000).keys()];

measure(() => memoSum(array1), '• array1 •');

measure(() => memoSum(array1), '• array1 •');

// Mutation!
array1.push(1);

measure(() => memoSum(array1), '• array1 •');

const array2 = [...array1, 2];

console.log('•--- ---•');

measure(() => memoSum(array2), '• array2 •');
measure(() => memoSum(array2), '• array2 •');