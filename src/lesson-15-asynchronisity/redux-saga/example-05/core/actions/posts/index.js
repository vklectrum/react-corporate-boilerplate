// Instruments
import {
    FETCH_POSTS,
    START_POSTS_FETCHING,
    STOP_POSTS_FETCHING,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR
} from './types';

export default Object.freeze({
    fetchPosts: () => ({
        type: FETCH_POSTS,
    }),
    fetchPostsSuccess: (payload) => ({
        type: FETCH_POSTS_SUCCESS,
        payload,
    }),
    fetchPostsError: (payload) => ({
        type: FETCH_POSTS_ERROR,
        payload,
    }),
    startPostsFetching: () => ({
        type: START_POSTS_FETCHING,
    }),
    stopPostsFetching: () => ({
        type: STOP_POSTS_FETCHING,
    }),

});


// export const fetchPosts = (payload) => ({
//     type: FETCH_POSTS,
//     payload,
// });
//
// export const startFeedFetching = () => ({
//     type: START_POSTS_FETCHING,
// });
//
// export const stopFeedFetching = () => ({
//     type: STOP_POSTS_FETCHING,
// });
