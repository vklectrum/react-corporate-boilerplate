import React, { Component, Fragment } from 'react';

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

export default class Base extends Component {
    render () {
        return (
            <Fragment>
                <Heading />
                <Body />
            </Fragment>
        );
    }
}
