// Instrumnets
import store from './store';
import { createPost, deletePost, createPostAsync } from '../core/actions/posts';
import { drawButtons, render, createPostButton, deletePostButton, createPostAsyncButton } from '../core/render';

// Create post on click
createPostButton.addEventListener('click', () => {
    store.dispatch(createPost());
});

// Delete post on click
deletePostButton.addEventListener('click', () => {
    const [newestPost] = store.getState().posts;

    newestPost && store.dispatch(deletePost(newestPost.id));
});

// Create post async on click
createPostAsyncButton.addEventListener('click', () => {
    store.dispatch(createPostAsync());
});

render(store, 'async')();
store.subscribe(render(store));
