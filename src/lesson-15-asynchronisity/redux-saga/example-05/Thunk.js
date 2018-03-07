// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import postsActions from './core/actions/posts';

class Thunk extends Component {
    _createPost = () => {
        this.props.actions.fetchPosts();
    }

    render () {
        const { posts, isFetching, error } = this.props;
        const postsLi = posts.map((item) => <li key = { item.title }>{ item.title }</li>);

        return (
            <Fragment>
                <h1>Posts</h1>
                <button onClick = { this._createPost }>Fetch posts</button>
                {
                    error
                        ? <p style = {{ color: 'red' }}>{ error }</p>
                        : null
                }
                {
                    isFetching
                        ? <p>Loading...</p>
                        : null
                }
                <ul>
                    { postsLi }
                </ul>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ posts: { data, isFetching, error }}) => ({
    posts: data,
    isFetching,
    error,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...postsActions }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Thunk);
