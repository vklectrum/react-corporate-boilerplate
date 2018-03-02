// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = [
    { id: 1, type: 'admin', name: 'Jack' },
    { id: 4, type: 'admin', name: 'Carol' },
    { id: 3, type: 'admin', name: 'Bob' },
    { id: 2, type: 'user', name: 'Barbara' }
];

// Объявление схем
const userSchema = new schema.Entity('users');
const adminSchema = new schema.Entity('admins');

const users = new schema.Array(
    {
        admins: adminSchema,
        users:  userSchema,
    },
    (input) => `${input.type}s`, // users || admins
);

// Нормализированные выходные данные
const normalized = normalize(denormalized, users);

console.log('•λ•', normalized);
