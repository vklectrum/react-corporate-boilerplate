// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = [
    { id: '1', guestID: null, name: 'Esther' },
    { id: '1', guestID: '22', name: 'Tom' }
];

// Объявление схем
const user = new schema.Entity(
    'users',
    {},
    { idAttribute: (input) => input.guestID ? input.guestID : input.id },
);

// Нормализированные выходные данные
const normalizedData = normalize(denormalized, [user]);

console.log('•λ•', normalizedData);
