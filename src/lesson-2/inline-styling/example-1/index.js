import React, { Component } from 'react';

export default class InlineStyling extends Component {
    render () {
        return (
            <h1
                style = { {
                    fontSize:    '1.5em',
                    paddingLeft: 5,
                    color:       'fireBrick',
                } }>
                Sup bro?
            </h1>
        );
    }
}
