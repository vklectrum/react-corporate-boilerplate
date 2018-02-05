import store from '../core/store';
import { deletePost } from '../core/actions/posts';

console.log('•λ•', store.getState());
console.log('•λ•', store.dispatch(deletePost('123')));
console.log('•λ•', store.getState());
