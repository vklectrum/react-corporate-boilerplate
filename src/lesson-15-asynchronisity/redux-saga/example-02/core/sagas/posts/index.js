// Core
import { takeEvery, select } from 'redux-saga/effects';

// Instruments
import {
    FETCH_POSTS
} from '../../actions/posts/types';
import { fetchPostsWorker } from './workers/fetchPosts/index';

export default {
    * fetchPostsWatcher () {
        yield takeEvery(FETCH_POSTS, fetchPostsWorker);
    },
    * watchAndLog () {
        yield takeEvery('*', function* logger(action) {
            const state = yield select();

            console.log('action', action);
            console.log('state after', state);
        });
    },
};
