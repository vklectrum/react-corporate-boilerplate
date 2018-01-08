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

const text = 'wo-ho!';
const nextState = {
    text,
};

const renderer = mount(<Example welcomeMessage = { welcomeMessage } />);

describe('enzyme/example-11 − <Example /> component:', () => {
    test('should handle state change correctly', () => {
        renderer.setState(nextState);

        expect(renderer.state()).toEqual(nextState);
        expect(renderer.find('p').text()).toBe(text);
    });
});
