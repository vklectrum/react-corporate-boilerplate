import { getArray } from './';

describe('jest/example-7 − \'getArray\' function:', () => {
    test('should return an array with valid data', () => {
        expect(getArray()).toEqual(expect.arrayContaining(['a valid data']));
    });
});
