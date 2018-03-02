import React, { Component } from 'react';

import Styles from './styles';

export default class CSSModules extends Component {
    render () {
        const messages = [...Array(4).keys()].map((item, index) => (
            <section className = { Styles[`article-${index + 1}`] } key = { index } />
        ));

        return messages;
    }
}
