// Instrumnets
import { combineReducers } from 'redux';
import store from './store';
import { createPost } from '../core/actions/posts';
import { render, firstReducerButton, secondReducerButton } from '../core/render';
import firstReducer from './reducer-1';
import secondReducer from './reducer-2';

// Create post on click
firstReducerButton.addEventListener('click', () => {
    // Adds posts at the end of a list
    store.replaceReducer(firstReducer);

    store.dispatch(createPost());
});

// Create post on click
secondReducerButton.addEventListener('click', () => {
    // Adds posts at the start of a list
    store.replaceReducer(secondReducer);

    store.dispatch(createPost());
});

render(store, 'replaceReducer')();
store.subscribe(render(store));
