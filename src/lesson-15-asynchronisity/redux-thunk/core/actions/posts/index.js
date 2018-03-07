// Instruments
import { FETCH_POSTS } from './types';

const fetchPostsAc = (data) => ({
    type:    FETCH_POSTS,
    payload: data,
});

export const fetchPosts = () => {
    return (dispatch, getState, api) => {
        fetch(`${api}/posts`)
            .then((response) => response.json())
            .then((result) => {
                console.log('result', result);
                dispatch(fetchPostsAc(result));
            });
    };
};
