// Instruments
import { FETCH_POSTS } from '../../actions/posts/types';
import { random } from 'faker';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POSTS:
            return [...state, ...payload];

        default:
            return state;
    }
};
