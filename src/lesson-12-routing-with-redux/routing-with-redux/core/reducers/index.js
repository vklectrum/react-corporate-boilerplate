// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Instruments
import auth from './auth';
import posts from './posts';

export default combineReducers({
    router,
    auth,
    posts,
});
