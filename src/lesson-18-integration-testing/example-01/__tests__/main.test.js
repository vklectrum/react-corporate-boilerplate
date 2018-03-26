// Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

// Instruments
import { Main } from '../Main';

configure({ adapter: new Adapter() });

const options = {
    firstName: 'Andrey',
    avatar:    'randomUrl',
};

const props = {
    createPost: jest.fn(),
};

const message = 'Hello Lectrum!';
const state = {
    message: '',
    posts:   [],
};

const mutatedState = {
    message,
    posts: [],
};


const spy = sinon.spy(Main.prototype, '_handleSubmit');
const result = mount(<Main />, {
    context: options,
});

describe('Main: ', () => {
    test('should contain 1 section element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('should contain 1 form element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('should contain 1 input element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('should contain 1 textarea element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('should have right initial state', () => {
        expect(result.state()).toEqual(state);
    });

    test('should have empty text input initially', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('should respond to input change method', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: message,
            },
        });
        expect(result.state()).toEqual(mutatedState);
        expect(result.find('textarea').text()).toBe(message);
    });

    test('should submit form', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual({
            message: '',
            posts:   [{ message }],
        });
        expect(result.find('textarea').text()).toBe('');
        expect(spy.calledOnce).toBeTruthy();
    });

    test('should have 1 li element after form submit', () => {
        expect(result.find('li')).toHaveLength(1);
    });

    test('should have submitted text inside li element', () => {
        expect(result.find('li').text()).toBe(message);
    });
});
