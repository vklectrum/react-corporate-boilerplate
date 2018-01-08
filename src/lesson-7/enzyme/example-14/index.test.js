import React from 'react';
import Example from './';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const renderer = render(<Example />);

describe('enzyme/example-2 − <Example /> component:', () => {
    test('should contain a valid quantity of elements', () => {
        expect(renderer.is('section')).toBe(true);
        expect(renderer.find('h1').attr('title')).toBe('Greeting message.');
        expect(renderer.find('p').attr('class')).toBe('paragraph-main');
    });
});
