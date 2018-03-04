// Core
import { Range, Map } from 'immutable';

const range1 = Range();

console.log('• range1 •', range1);


// Range(start?: number, end?: number, step?: number): Seq.Indexed<number>
// 
// const { Range } = require('immutable@4.0.0-rc.9')
// Range() // [ 0, 1, 2, 3, ... ]
// Range(10) // [ 10, 11, 12, 13, ... ]
// Range(10, 15) // [ 10, 11, 12, 13, 14 ]
// Range(10, 30, 5) // [ 10, 15, 20, 25 ]
// Range(30, 10, 5) // [ 30, 25, 20, 15 ]
// Range(30, 30, 5) // []