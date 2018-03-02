import React from 'react';
import Example from './';
import Child from './Child';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const welcomeMessage = 'Hi!';

const state = {
    text: 'Lorem ipusm dolor sit amet!',
};

const message = 'Hi there!';

const renderer = mount(<Example welcomeMessage = { welcomeMessage } />, {
    context: {
        message,
    },
});

describe('enzyme/example-12 − <Example /> component:', () => {
    test('should handle state change correctly', () => {
        expect(renderer.find(Child).find('h1').text()).toBe(message);
    });
});
