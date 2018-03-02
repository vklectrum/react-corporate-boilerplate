// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Feed extends Component {
    _handleCreatePost = () => this.props.actions.createPost();

    render () {
        const { posts, actions } = this.props;
        const postsList = posts.map(({ id, comment }) => (
            <li key = { id }>
                <button onClick = { () => actions.deletePost(id) }>Delete</button>
                <Link to = { `/post/${id}` }>{comment}</Link>
            </li>
        ));

        return (
            <section>
                <h1>Feed</h1>
                <button onClick = { this._handleCreatePost }>Create</button>
                <ul>{postsList}</ul>
            </section>
        );
    }
}
