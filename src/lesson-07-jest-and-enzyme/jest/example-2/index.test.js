import { add } from './';

describe('jest/example-2 − \'add\' function:', () => {
    test('produces a correct value given a non-valid arguments', () => {
        expect(add(false, NaN)).toEqual(NaN);
    });
});
