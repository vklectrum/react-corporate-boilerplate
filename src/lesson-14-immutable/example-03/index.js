// Core
import { List } from 'immutable';

// Instruments
import { measure } from '../../helpers';

const array1 = [...Array(1000000).keys()];

measure(() => {
    const array2 = array1.filter((item) => item !== 500000);
}, 'array filter');

const list1 = List(array1);

measure(() => {
    const list2 = list1.filter((item) => item !== 500000);
}, 'list filter');

measure(() => {
    const array3 = array1.map((item) => item ** 2);
}, 'array map');

measure(() => {
    const list3 = list1.map((item) => item ** 2);
}, 'list map');
