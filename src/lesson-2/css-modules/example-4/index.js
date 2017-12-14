import React, { Component } from 'react';

import Styles from './styles';

export default class CSSModules extends Component {
    render () {
        return <section className = { Styles.box } />;
    }
}
