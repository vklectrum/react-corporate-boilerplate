// Instruments
import { DELETE_POST, DELETE_POST_FAIL } from './types';

export const deletePost = (
    postId /* post id to be deleted... */,
    meta /* additional info... */,
) => ({
    type:    DELETE_POST,
    payload: postId,
    meta,
});

export const deletePostFail = (error /* error object... */) => ({
    type:    DELETE_POST_FAIL,
    payload: error,
    error:   true,
});
