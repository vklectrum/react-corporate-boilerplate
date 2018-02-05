// Instruments
import { DELETE_POST, DELETE_POST_FAIL } from './types';

export const deletePost = (postId, meta) => ({
    type:    DELETE_POST,
    payload: postId,
    meta,
});

export const deletePostFail = (error) => ({
    type:    DELETE_POST_FAIL,
    payload: error,
    error:   true,
});
