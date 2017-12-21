import { add } from './';

describe('jest/example-1 − \'add\' function:', () => {
    test('produces a correct value given a valid arguments', () => {
        expect(add(2, 3)).toBe(5);
    });
});
