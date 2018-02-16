import React, { Component, Fragment } from 'react';
import withHover from './HOCUtils';

@withHover
class Heading extends Component {
    render () {
        const { hover } = this.props;

        const color = hover ? 'gold' : 'rebeccapurple';

        return <h1 style = { { color } }>Heading of a component!</h1>;
    }
}

@withHover
class Body extends Component {
    render () {
        const { hover } = this.props;

        const color = hover ? 'deepskyblue' : 'firebrick';

        return <p style = { { color } }>Body of a component!</p>;
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
