// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Instruments
import { fetchPosts } from '../core/actions/posts';

class Thunk extends Component {
    _createPost = () => this.props.dispatch(fetchPosts());

    render () {
        const { posts } = this.props;
        const postsLi = posts.map((item) => <li key = { item.title }>{ item.title }</li>);

        return (
            <Fragment>
                <h1>Posts</h1>
                <button onClick = { this._createPost }>Fetch posts</button>
                <ul>
                    { postsLi }
                </ul>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ posts }) => ({
    posts,
});

export default connect(mapStateToProps)(Thunk);
