// Instruments
import { FETCH_POSTS } from './types';

const fetchPostsApi = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = response.json();

    return data;
};

export const fetchPosts = () => ({
    type:    FETCH_POSTS,
    payload: fetchPostsApi(),
});
