// Core
import React, { Component } from 'react';

export default class Post extends Component {
    render () {
        const { comment } = this.props;

        return <li>{comment}</li>;
    }
}
