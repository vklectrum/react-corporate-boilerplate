import { add } from './';

describe('jest/example-4 − \'add\' function:', () => {
    test('throws an error given a non-valid arguments', () => {
        expect(() => add(false, NaN)).toThrow(
            'An argument should be a number!'
        );
    });
});
