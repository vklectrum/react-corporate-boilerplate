export const add = (a, b) => {
    if (typeof a !== 'number' || typeof a !== 'number') {
        throw new Error('An argument should be a number!');
    }

    return a + b;
};
