// Core
import { createStore, applyMiddleware } from 'redux';

// Instrumnets
import rootReducer from '../core/reducers';

// This is a middleware
const logger = (store) => (next) => (action) => {
    const stateBefore = store.getState();

    next(action);

    const stateAfter = store.getState();

    console.log(
        'State before → ',
        stateBefore,
        '| Action → ',
        action,
        '| State after → ',
        stateAfter
    );
};

// Init store
export default createStore(rootReducer, applyMiddleware(logger));
