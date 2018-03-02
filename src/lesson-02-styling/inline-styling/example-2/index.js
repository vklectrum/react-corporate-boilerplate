import React, { Component } from 'react';

export default class InlineStyling extends Component {
    render () {
        const styles = {
            fontSize:    '1.5em',
            paddingLeft: 5,
            color:       'fireBrick',
        };

        return <h1 style = { styles }>Chilla</h1>;
    }
}
