// Core
import React, { Component } from 'react';

export default class Post extends Component {
    _deletePost = () => {
        const { actions, id } = this.props;

        actions.deletePost(id);
    };

    render () {
        const { comment } = this.props;

        return (
            <li>
                <button onClick = { this._deletePost }>Delete post</button>
                {comment}
            </li>
        );
    }
}
