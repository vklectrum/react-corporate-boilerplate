// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = [
    {
        ID:        '123',
        url:       'https://twitter.com',
        tweeter:   { ID: '456', name: 'Jimmy' },
        favorites: 'hello1',
    },
    {
        ID:        '123',
        url:       'https://twitter.com',
        tweeter:   { ID: '678', name: 'Jack' },
        favorites: 'hello2',
    }
];

// Объявление схем
const user = new schema.Entity('users', {}, { idAttribute: 'ID' });

const tweet = new schema.Entity(
    'tweets',
    { tweeter: user },
    {
        idAttribute: 'ID',

        // Когда конфликнуют айдишники, взять все данные с сущности entityB поверх entityA, кроме 'favorites'
        mergeStrategy: (entityA, entityB) => ({
            ...entityA,
            ...entityB,
            favorites: entityA.favorites,
        }),

        // Убарть с сущности поле URL
        processStrategy: (entity) => {
            const result = Object.assign({}, entity);

            delete result.url;

            return result;
        },
    },
);

// Нормализированные выходные данные
const normalizedData = normalize(denormalized, [tweet]);

console.log('•λ•', normalizedData);
