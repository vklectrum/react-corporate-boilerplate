import { Component, Children } from 'react';

export default class MyComponent extends Component {
    render () {
        const { children } = this.props;

        console.log('•λ•', this.props);
        console.log('•λ•', Array.isArray(children));
        console.log('•λ•', children);

        const onlyFirstChild = Children.map(children, (child, index) => {
            if (index < 1) {
                return child;
            }
        });

        return onlyFirstChild;
    }
}
