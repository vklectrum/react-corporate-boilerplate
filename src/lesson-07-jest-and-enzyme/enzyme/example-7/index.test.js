import React from 'react';
import Example from './';
import Child from './Child';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const welcomeMessage = 'Hi!';

const renderer = shallow(<Example welcomeMessage = { welcomeMessage } />);

describe('enzyme/example-7 − <Example /> component:', () => {
    test('should contain a child component', () => {
        expect(renderer.find(Child).length).toBe(1);
    });
});
