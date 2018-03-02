export const log = (message, color, objects) =>
    console.log(`%c ${message}`, `background: #222; color: #${color}`, objects || '');

export const parent = 'bada55';
export const child = 'bcfdee';

export const sum = (list) => list.reduce((a, b) => a + b);

export const memoize = (fn) => {
    let previousArgument = null;
    let previousResult = null;

    return (argument) => argument === previousArgument
        ? previousResult
        : (previousArgument = argument, previousResult = fn.call(this, argument));
};
