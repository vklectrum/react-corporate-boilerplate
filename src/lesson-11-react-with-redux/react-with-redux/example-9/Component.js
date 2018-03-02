import React, { Component, Fragment } from 'react';
import withLogging from './HOCUtils';

// @withLogging({ delay: 5000, color: 'ad0144' })
class Heading extends Component {
    render () {
        return <h1>Heading of a component!</h1>;
    }
}

// @withLogging({ delay: 1000, color: '00ff11' })
class Body extends Component {
    render () {
        return <p>Body of a component!</p>;
    }
}

// @withLogging({ delay: 100, color: 'dd9911' })
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

export default withLogging({ delay: 2000, color: 'f8075a' })(Base);
