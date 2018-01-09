// Core
import React, { Component } from 'react';

// Instruments
import * as actions from '../../actions/posts';
import dispatcher from '../../dispatcher';
import PostsStore from '../../stores/posts';

export default class Feed extends Component {
    state = PostsStore.getState();

    componentDidMount () {
        PostsStore.subscribe(this.onChange);
    }

    componentWillUnmount () {
        PostsStore.unsubscribe(this.onChange);
    }

    onChange = () => {
        this.setState(() => PostsStore.getState());
    };

    fetchPosts = () => {
        dispatcher.dispatch(actions.fetchPosts());
    };

    render () {
        const { posts, postsFetching } = this.state;

        const postsList = posts.map(({ comment, id }) => <li key = { id }>{comment}</li>);

        return (
            <section>
                <h1>Feed</h1>
                <br />
                <button onClick = { this.fetchPosts }>Fetch posts...</button>
                <ul>{postsFetching ? 'Loading...' : postsList}</ul>
            </section>
        );
    }
}
