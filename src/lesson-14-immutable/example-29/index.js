// Core
import { Record } from 'immutable';

const ABRecord = Record({ a: 1, b: 2 });
const myRecord1 = new ABRecord({ b: 3 });

console.log('• myRecord1 •', myRecord1);
console.log('• myRecord1.get(\'a\') •', myRecord1.get('a'));
console.log('• myRecord1.get(\'b\') •', myRecord1.get('b'));

const myRecordWithoutB = myRecord1.remove('b');

console.log('• myRecordWithoutB •', myRecordWithoutB);
console.log('• myRecordWithoutB.get(\'b\') •', myRecordWithoutB.get('b'));

const myRecord2 = new ABRecord({ x: 4});
console.log('• myRecord2 •', myRecord2);

console.log('• myRecord2 with accessor •', myRecord2.a);

class ABRecordExtended extends ABRecord {
  getAB() {
    return this.a + this.b;
  }
}

var myRecord3 = new ABRecordExtended({b: 3})
console.log('• myRecord3.getAB() •', myRecord3.getAB());