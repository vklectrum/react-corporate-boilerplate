import React from 'react';
import Example from './';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const renderer = shallow(<Example />);

describe('enzyme/example-3 − <Example /> component:', () => {
    test('should contain two children', () => {
        expect(renderer.children().length).toBe(2);
    });
});
