// Instrumnets
import store from './store';
import { createPost, deletePost } from '../core/actions/posts';
import { render, createPostButton, deletePostButton } from '../core/render';

// Create post on click
createPostButton.addEventListener('click', () => {
    store.dispatch(createPost());
});

// Delete post on click
deletePostButton.addEventListener('click', () => {
    const [newestPost] = store.getState().posts;

    newestPost && store.dispatch(deletePost(newestPost.id));
});

render(store, 'normal')();
store.subscribe(render(store));
