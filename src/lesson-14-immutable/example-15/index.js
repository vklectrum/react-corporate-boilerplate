// Core
import { Map } from 'immutable';

const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 2);
console.log('• updatedMap === originalMap •', updatedMap === originalMap); // No-op .set() вернул ссылку
