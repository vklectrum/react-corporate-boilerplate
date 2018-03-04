// Core
import { sum, memoize, measure } from 'helpers';

const memoSum = memoize(sum);

const array = [...Array(1000000).keys()];

measure(() => memoSum(array), '• array •');

measure(() => memoSum(array), '• array •');

// Mutation!
array.push(1);

measure(() => memoSum(array), '• array •');
