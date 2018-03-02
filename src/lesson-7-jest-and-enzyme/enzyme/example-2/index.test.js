import React from 'react';
import Example from './';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const renderer = shallow(<Example />);

describe('enzyme/example-2 − <Example /> component:', () => {
    test('should contain a valid quantity of elements', () => {
        expect(renderer.find('section').length).toBe(1);
        expect(renderer.find('h1').length).toBe(1);
        expect(renderer.find('p').length).toBe(1);
    });
});
