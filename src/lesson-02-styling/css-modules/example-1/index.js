import React, { Component, Fragment } from 'react';

import Styles from './styles';

export default class CSSModules extends Component {
    render () {
        return (
            <Fragment>
                <section className = { Styles.article }>
                    <h1>Time and being</h1>
                </section>
                <h1>I am not affected by global styles</h1>
            </Fragment>
        );
    }
}
