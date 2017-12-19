import { Component, Children } from 'react';

export default class MyComponent extends Component {
    render () {
        const { children } = this.props;

        console.log('•λ•', this.props);
        console.log('•λ•', children);
        console.log('•λ•', Children.count(children));

        const singleChild = Children.only(children);

        return singleChild;
    }
}
