// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { createPost } from '../core/actions/posts';

// Components
import Post from './Post';

class Feed extends Component {
    _createPost = () => this.props.createPost();

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

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators({ createPost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
