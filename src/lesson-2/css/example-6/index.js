import React, { Component, Fragment } from 'react';

import './styles';

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <button className = 'button'>
                    Just Button
                </button>
                <button className = 'button button--blue'>
                    Blue Button
                </button>
                <button className = 'button button--pink'>
                    Pink Button
                </button>
                <button className = 'button button--pink button--medium'>
                    Medium Pink Button
                </button>
                <button className = 'button button--pink button--large'>
                    Large Pink Button
                </button>
                <button className = 'button button--blue button--outlined'>
                    Blue Outlined Button
                </button>
                <p>Hello</p>
            </Fragment>
        );
    }
}
