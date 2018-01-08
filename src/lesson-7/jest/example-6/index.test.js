import { getFalsy } from './';

describe('jest/example-6 − \'getFalsy\' function:', () => {
    test('should return a \'falsy\' value', () => {
        expect(getFalsy()).toBeFalsy();
    });
});
