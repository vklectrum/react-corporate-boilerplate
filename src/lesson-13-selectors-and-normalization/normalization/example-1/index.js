// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = [
    { id: 1, name: 'Jack' },
    { id: 2, name: 'Mery' }
];

// Объявление схемы
const user = new schema.Entity('users');

// const usersArray = new schema.Array(user);

// Также с помощью сокращенного ситаксиса
const normalized = normalize(denormalized, [user]);

// Нормализированные выходные данные
console.log('• normalized •', normalized);
