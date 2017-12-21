import React from 'react';
import Example from './';
import Child from './Child';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const welcomeMessage = 'Hi!';

const renderer = mount(<Example welcomeMessage = { welcomeMessage } />);

describe('enzyme/example-9 − <Example /> component:', () => {
    test('should have a valid prop', () => {
        expect(renderer.prop('welcomeMessage')).toBe(welcomeMessage);
    });
});
