// Core
import { schema, normalize } from 'normalizr';

// Денормализированные входные данные
const denormalized = {
    orders: [
        {
            id:        10,
            lineItems: [
                {
                    id:       483,
                    quantity: 2,
                    product:  {
                        id:    924,
                        name:  'Carrots',
                        price: 1.5,
                    },
                }
            ],
        },
        {
            id:        12,
            lineItems: [
                {
                    id:       480,
                    quantity: 4,
                    product:  {
                        id:    184,
                        name:  'Apples',
                        price: 4.5,
                    },
                }
            ],
        }
    ],
    products: [
        {
            id:    924,
            name:  'Carrots',
            price: 1.5,
        },
        {
            id:    184,
            name:  'Apples',
            price: 4.5,
        }
    ],
};

// Объявление схем
const product = new schema.Entity('products');
const lineItem = new schema.Entity('lineItems', {
    product,
});

const order = new schema.Entity('orders', {
    lineItems: [lineItem],
});

const result = new schema.Object({
    orders:   [order],
    products: [product],
});

// Нормализированные выходные данные
const normalized = normalize(denormalized, result);

console.log('•λ•', normalized);
