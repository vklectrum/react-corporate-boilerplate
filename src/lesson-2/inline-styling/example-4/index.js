import React, { Component } from 'react';

import styles from './styles';

export default class InlineStyling extends Component {
    render () {
        return (
            <section style = { styles }>
                <p>One shot − one kill 🧙🏼‍♂️</p>
                <button style = { styles.button }>Kill 🔫</button>
            </section>
        );
    }
}
