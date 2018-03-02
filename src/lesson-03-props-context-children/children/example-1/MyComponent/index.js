import { Component } from 'react';

export default class MyComponent extends Component {
    render () {
        const { children } = this.props;

        console.log('•λ•', this.props);
        console.log('•λ•', Array.isArray(children));
        console.log('•λ•', children);

        return children;
    }
}
