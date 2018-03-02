import { getPromise } from './';

describe('jest/example-8 − \'getPromise\' function:', () => {
    test('should return a resolved promise', () =>
        expect(getPromise()).resolves.toBe('resolved!'));
});
