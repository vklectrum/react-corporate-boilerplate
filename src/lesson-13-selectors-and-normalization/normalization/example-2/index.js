// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = [
    {
        id:     1,
        title:  'Some Article',
        author: {
            id:   3,
            name: 'Jack',
        },
    },
    {
        id:     2,
        title:  'Other Article',
        author: {
            id:   3,
            name: 'Jack',
        },
    }
];

// Объявление схем
const usersSchema = new schema.Entity('users');

const articleSchema = new schema.Entity('articles', {
    author: usersSchema,
});

const normalized = normalize(denormalized, [articleSchema]);

// Нормализированные выходные данные
console.log('• normalized •', normalized);
