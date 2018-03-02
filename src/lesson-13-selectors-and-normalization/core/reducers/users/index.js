// Instruments
import { CREATE_POST, DELETE_POST } from '../../actions/posts/types';
import { random } from 'faker';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        // case :
        //     return [...state, { id: random.uuid(), comment: payload }];

        // case DELETE_POST:
        //     return state.filter((post) => post.id !== payload);

        default:
            return state;
    }
};
