import { add } from './';

describe('jest/example-13 − \'add\' function:', () => {
    test('should match its snapshot', () => {
        expect(add(2, 3)).toMatchSnapshot();
    });
});
