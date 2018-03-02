import React from 'react';
import Example from './';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const oldText = 'Lorem ipusm dolor sit amet!';
const newText = 'new text!';

const initialState = {
    text: oldText,
};
const nextState = {
    text: newText,
};

const renderer = mount(<Example />);

describe('enzyme/example-13 − <Example /> component:', () => {
    test('should have a valid initial state', () => {
        expect(renderer.state()).toEqual(initialState);
    });

    test('should have valid elements', () => {
        expect(renderer.find('section').length).toBe(1);
        expect(renderer.find('section > h1').length).toBe(1);
        expect(renderer.find('section > p').length).toBe(1);
        expect(renderer.find(`section > input[type='text']`).length).toBe(1);
    });

    test('an <p>{ text }</p> tag value should be controlled by state object', () => {
        expect(renderer.find('p').text()).toBe(oldText);
    });

    test('an <input /> should respond correctly to change event', () => {
        renderer.find('input').simulate('change', {
            target: {
                value: newText,
            },
        });

        expect(renderer.find('p').text()).toBe(newText);
        expect(renderer.state()).toEqual(nextState);
    });
});
