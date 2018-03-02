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

// Нормализированные выходные данные
