// AC − is an abbreviation of 'Action Creator'
export const deletePostAC = (postId) => ({
    type:    'DELETE_POST',
    payload: postId,
});
