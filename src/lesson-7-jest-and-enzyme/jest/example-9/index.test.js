import { getPromise } from './';

describe('jest/example-9 − \'getPromise\' function:', () => {
    test('should return a resolved promise', async () => {
        await expect(getPromise()).resolves.toBe('resolved!');
    });
});
