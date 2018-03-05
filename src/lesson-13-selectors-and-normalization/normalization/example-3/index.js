// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = {
    id:     '123',
    author: {
        id:   '1',
        name: 'Paul',
    },
    title:    'My awesome blog post',
    comments: [
        {
            id:        '324',
            commenter: {
                id:   '2',
                name: 'Nicole',
            },
        }
    ],
};

// Объявление схем
const usersSchema = new schema.Entity('users');
const commentsSchema = new schema.Entity('comments', {
    commenter: usersSchema,
});

const articleSchema = new schema.Entity('articles', {
    author:   usersSchema,
    comments: [commentsSchema],
});

// Нормализированные выходные данные
const normalized = normalize(denormalized, articleSchema);

// Нормализированные выходные данные
console.log('• normalized •', normalized);
