// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = [{ userID: 1, name: 'Jack' }, { userID: 2, name: 'Mery' }];

// Объявление схем
const users = new schema.Entity('users');

// Нормализированные выходные данные
const normalized = normalize(denormalized, [users]);

console.log('•λ•', normalize);
