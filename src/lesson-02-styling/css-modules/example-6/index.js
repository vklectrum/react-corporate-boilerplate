import React, { Component } from 'react';

import Styles from './styles';

export default class CSSModules extends Component {
    render () {
        return (
            <section className = { Styles.article }>
                <article role = 'main'>
                    <h1>My favorite summer!</h1>
                    <p>Lorem ipsum dolor sit amet!</p>
                </article>
                <aside role = 'complementary'>By the way...</aside>
            </section>
        );
    }
}
