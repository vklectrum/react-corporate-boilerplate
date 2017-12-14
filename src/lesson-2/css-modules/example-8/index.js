import React, { Component } from 'react';

import Styles from './styles';

export default class CSSModules extends Component {
    render () {
        return (
            <section className = { Styles.article }>
                <h1>Time and being</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <button>Next page</button>
            </section>
        );
    }
}
