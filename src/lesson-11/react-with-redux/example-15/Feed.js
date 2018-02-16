// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Instruments
import { createPost } from '../core/actions/posts';

// Components
import Post from './Post';

class Feed extends Component {
    _createPost = () => this.props.dispatch(createPost());

    render () {
        const { posts: postsData } = this.props;

        const posts = postsData.map((props) => <Post key = { props.id } { ...props } />);

        return (
            <Fragment>
                <h1>Posts</h1>
                <button onClick = { this._createPost }>Create post</button>
                {posts}
            </Fragment>
        );
    }
}

export default connect((state) => state)(Feed);
