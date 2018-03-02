import React, { Component, Fragment } from 'react';
import withHover from './HOCUtils';

@withHover({ color1: 'gold', color2: 'rebeccapurple', fontSize: 32, transition: 'font-size .3s ease' })
class Heading extends Component {
    render () {
        const { style } = this.props;

        return <h1 style = { style }>Heading of a component!</h1>;
    }
}

@withHover({ color1: 'deepskyblue', color2: 'firebrick', fontSize: 24, transition: 'font-size .3s ease' })
class Body extends Component {
    render () {
        const { style } = this.props;

        return <p style = { style }>Body of a component!</p>;
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
