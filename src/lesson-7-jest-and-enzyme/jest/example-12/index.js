export const callFuncs = (...funcs) =>
    funcs.forEach((func, index) => index !== 0 && func());
