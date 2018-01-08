// AC − is an abbreviation === Action Creator
export const deletePostAC = (postId) => ({
    type:    'DELETE_POST',
    payload: postId,
});
