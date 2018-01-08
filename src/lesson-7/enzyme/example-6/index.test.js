import React from 'react';
import Example from './';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const welcomeMessage = 'Hi!';
const nextWelcomeMessage = 'Hello!';

const renderer = shallow(<Example welcomeMessage = { welcomeMessage } />);

describe('enzyme/example-6 − <Example /> component:', () => {
    test('should render modified props correctly', () => {
        renderer.setProps({
            welcomeMessage: nextWelcomeMessage,
        });

        expect(renderer.find('h1').text()).toBe(nextWelcomeMessage);
    });
});
