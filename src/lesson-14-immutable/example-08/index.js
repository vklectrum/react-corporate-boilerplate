// Core
import { List } from 'immutable';

// Instruments
import { measure } from 'helpers';

const array1 = [];

for (let i = 0; i < 10000; i++) {
    array1.push({
        id:       `id_${i}`,
        favorite: true,
        name:     `name_${i}`,
    });
}

const array2 = array1.map((item) => ({
    id:       item.id,
    favorite: Math.random() * 2 > 1,
    name:     Math.random() * 2 > 1 ? `changed_${item.name}` : item.name,
}));

// console.log('length array1:', array1);
// console.log('length array2:', array2);

const list1 = List(array1);
const list2 = List(array2);

measure(() => {
    const array3 = array1.map((item1) =>
        Object.assign({}, item1, array2.find((item2) => item2.id === item1.id)),
    );
}, 'array');

measure(() => {
    const list3 = list1.merge(list2);
}, 'immutable');

