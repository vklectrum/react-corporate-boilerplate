// Core
import React, { Component, Fragment } from 'react';
import { Prompt } from 'react-router-dom';

export default class Contact extends Component {
    render () {
        return (
            <Fragment>
                <h1>Contact</h1>
                <Prompt message = 'Are you sure you want to leave?' />
            </Fragment>
        );
    }
}
