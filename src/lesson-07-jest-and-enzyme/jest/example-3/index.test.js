import { add } from './';

describe('jest/example-3 − \'add\' function:', () => {
    test('throws an error given a non-valid arguments', () => {
        expect(() => add(false, NaN)).toThrow();
    });
});
