// Instruments
import * as types from '../../actions/posts/types';

const initialState = [{ id: '123', comment: 'yo!' }, { id: '456', comment: 'sup, cuz?' }];

export default (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_POST:
            return state.filter((post) => post.id !== action.payload);

        default:
            return state;
    }
};
