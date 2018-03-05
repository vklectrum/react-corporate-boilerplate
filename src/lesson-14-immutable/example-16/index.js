// Core
import { Map } from 'immutable';

const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 1000);

console.log('• updatedMap === originalMap •', updatedMap === originalMap);

const anotherUpdatedMap = originalMap.set('b', 1000);

console.log(
    '• anotherUpdatedMap === updatedMap •',
    anotherUpdatedMap === updatedMap,
);

console.log(
    '• anotherUpdatedMap.equals(updatedMap) •',
    anotherUpdatedMap.equals(updatedMap),
);
