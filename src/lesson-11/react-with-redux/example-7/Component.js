import React, { Component, Fragment } from 'react';
import withLogging from './HOCUtils';

class Heading extends Component {
    render () {
        return <h1>Heading of a component!</h1>;
    }
}

class Body extends Component {
    render () {
        return <p>Body of a component!</p>;
    }
}

// @withLogging
class Base extends Component {
    render () {
        return (
            <Fragment>
                <Heading />
                <Body />
            </Fragment>
        );
    }
}

export default withLogging(Base);
