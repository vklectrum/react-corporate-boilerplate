import React from 'react';
import Example from './';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const renderer = shallow(<Example />);

const expected = '<section><h1>Welcome!</h1><p>Lorem ipusm dolor sit amet!</p></section>';

describe('enzyme/example-1 − <Example /> component:', () => {
    test('should produce a valid React component', () => {
        expect(renderer.html()).toBe(expected);
    });
});
