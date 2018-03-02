import { callFuncs } from './';

describe('jest/example-12 − \'callFuncs\' function:', () => {
    test('should call funciosn passed as arguments, but not the first one ', () => {
        const func1 = jest.fn();
        const func2 = jest.fn();

        callFuncs(func1, func2);

        expect(func1).not.toHaveBeenCalled();
        expect(func1).toHaveBeenCalledTimes(0);
        expect(func2).toHaveBeenCalledTimes(1);
    });
});
