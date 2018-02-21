// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Instruments
import { createPost } from '../core/actions/posts';

class Feed extends Component {
    _createPost = () => this.props.dispatch(createPost());

    render () {
        return (
            <Fragment>
                <h1>Posts</h1>
                <button onClick = { this._createPost }>Create post</button>
            </Fragment>
        );
    }
}

const connectFeedComponentToRedux = connect();

export default connectFeedComponentToRedux(Feed);
