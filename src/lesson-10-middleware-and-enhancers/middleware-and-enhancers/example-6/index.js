// Instrumnets
import { bindActionCreators } from 'redux';
import store from './store';
import * as actions from '../core/actions/posts';
import { render, deletePostButton, createPostButton, createPostAsyncButton } from '../core/render';

// Bind action creators to store.dispatch
const { createPost, createPostAsync, deletePost } = bindActionCreators(actions, store.dispatch);

// Create post on click
createPostButton.addEventListener('click', () => {
    createPost();
});

// Delete post on click
deletePostButton.addEventListener('click', () => {
    const [newestPost] = store.getState().posts;

    newestPost && deletePost(newestPost.id);
});

// Create post async on click
createPostAsyncButton.addEventListener('click', () => {
    createPostAsync();
});

render(store, 'async')();
store.subscribe(render(store));
