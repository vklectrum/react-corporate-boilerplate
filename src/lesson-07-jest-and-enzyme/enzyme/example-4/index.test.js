import React from 'react';
import Example from './';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const renderer = shallow(<Example />);

describe('enzyme/example-4 − <Example /> component:', () => {
    test('should fallback to default props correctly', () => {
        expect(renderer.find('h1').text()).toBe('Greeting!');
    });
});
