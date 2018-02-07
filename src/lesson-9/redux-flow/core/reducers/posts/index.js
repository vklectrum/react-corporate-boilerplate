// Instruments
import { DELETE_POST } from '../../actions/posts/types';

const initialState = [
    { id: '123', comment: 'The black color is the best one!' },
    { id: '456', comment: 'No! The white color is the best one!' }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
            return state.filter((post) => post.id !== action.payload);

        default:
            return state;
    }
};
