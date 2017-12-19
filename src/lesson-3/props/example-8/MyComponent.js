// Core
import { string, number } from 'prop-types';

const MyComponent = ({ firstName, lastName, age }) =>
    `Hello! I am ${firstName} ${lastName}, and I am ${age}.`;

MyComponent.propTypes = {
    age:       number.isRequired,
    firstName: string.isRequired,
    lastName:  string.isRequired,
};

export default MyComponent;
