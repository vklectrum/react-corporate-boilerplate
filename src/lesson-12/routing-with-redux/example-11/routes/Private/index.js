// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// Instruments
import * as postsActions from '../../../core/actions/posts';

// Components
import Navigation from '../../components/Navigation';
import Feed from '../../components/Feed';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact';
import Post from '../../components/Post';

class Private extends Component {
    render () {
        const { posts, actions } = this.props;

        return (
            <section>
                <Route component = { Navigation } path = '/' />
                <Switch>
                    <Route
                        exact
                        path = '/feed'
                        render = { () => <Feed actions = { actions } posts = { posts } /> }
                    />
                    <Route exact component = { FAQ } path = '/faq' />
                    <Route exact component = { Contact } path = '/contact' />
                    <Route path = '/post/:id' render = { (props) => <Post posts = { posts } { ...props } /> } />
                    <Redirect to = '/feed' />
                </Switch>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(postsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Private);
