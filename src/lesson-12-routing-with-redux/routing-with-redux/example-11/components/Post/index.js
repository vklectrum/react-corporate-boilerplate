// Core
import React, { Component } from 'react';

export default class Post extends Component {
    render () {
        const { posts, match } = this.props;

        const [post] = posts.filter(({ id }) => id === match.params.id);

        return (
            <section>
                <h1>Post</h1>
                <h1>{match.params.id}</h1>
                <p>{post.comment}</p>
            </section>
        );
    }
}
