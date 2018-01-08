import { getTruthy } from './';

describe('jest/example-5 − a \'getTruthy\' function:', () => {
    test('should retrun a \'truthy\' value', () => {
        expect(getTruthy()).toBeTruthy();
    });
});
