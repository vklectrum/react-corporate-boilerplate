import store from '../core/store';
import { deletePost } from '../core/actions/posts';

const subscription = () => console.log('• subscription •', 'An action is going to be dispatched!');

const unsubscribe = store.subscribe(subscription);

console.log('• getState •', store.getState());

console.log('• dispatch 1 •', store.dispatch(deletePost('123')));
console.log('• getState •', store.getState());

console.log('• dispatch 2 •', store.dispatch(deletePost('123')));
console.log('• getState •', store.getState());

unsubscribe();

console.log(
    '• dispatch 3 •',
    store.dispatch({
        type:    'DELETE_POST',
        payload: '456',
    }),
);
console.log('• getState: •', store.getState());

console.log('•λ•', store);
