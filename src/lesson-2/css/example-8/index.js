import React, { Component, Fragment } from 'react';

import './styles';

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <nav className = 'navigation'>
                    <button className = 'navigation--button'>
                        Normal button
                    </button>
                    <button className = 'navigation--button navigation--button--state-success'>
                        Success button
                    </button>
                    <button className = 'navigation--button navigation--button--state-danger'>
                        Danger button
                    </button>
                </nav>
            </Fragment>
        );
    }
}
