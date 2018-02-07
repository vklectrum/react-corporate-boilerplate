import store from '../core/store';
import { deletePost } from '../core/actions/posts';

console.log('• getState •', store.getState());

console.log('• dispatch •', store.dispatch(deletePost('123')));

console.log('• getState •', store.getState());
