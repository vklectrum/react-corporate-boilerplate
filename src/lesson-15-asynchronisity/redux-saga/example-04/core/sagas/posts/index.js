// Core
import { take, takeEvery, put } from 'redux-saga/effects';

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
        for (let i = 0; i < 2; i++) {
            const action = yield take('FETCH_POSTS');
        }
        yield put({ type: 'SHOW_CONGRATULATION' });
    },
};
