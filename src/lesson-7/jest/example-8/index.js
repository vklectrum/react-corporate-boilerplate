export const getPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('resolved!'), 4000);
    });
