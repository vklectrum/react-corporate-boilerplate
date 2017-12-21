import { callFuncs } from './';

describe('jest/example-11 − \'callFuncs\' function:', () => {
    test('should call funciosn passed as arguments ', () => {
        const func1 = jest.fn();
        const func2 = jest.fn();

        callFuncs(func1, func2);

        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(1);
    });
});
