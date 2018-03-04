// Core
import { Map } from 'immutable';

const map1 = Map({ key: 'value' });
const map2 = map1.set('key', 'foo');
const map3 = map1.set('key', 'value');

console.log('• map1 •', map1);
console.log('• map2 •', map2);
console.log('• map3 •', map3);
console.log('• map1 === map2 •', map1 === map2);
console.log('• map1 === map3 •', map1 === map3);
