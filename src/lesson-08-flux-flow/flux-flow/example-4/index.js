// Instruments
import { DELETE_POST } from './types';

export const deletePost = (postId) => ({
    type:    DELETE_POST,
    payload: postId,
});
