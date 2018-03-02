import React from 'react';
import Example from './';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const welcomeMessage = 'Hi!';

const renderer = shallow(<Example welcomeMessage = { welcomeMessage } />);

describe('enzyme/example-5 − <Example /> component:', () => {
    test('should render passed props correctly', () => {
        expect(renderer.find('h1').text()).toBe(welcomeMessage);
    });
});
