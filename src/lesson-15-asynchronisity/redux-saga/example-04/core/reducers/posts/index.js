// Instruments
import {
    START_POSTS_FETCHING,
    STOP_POSTS_FETCHING,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    SHOW_CONGRATULATION
} from '../../actions/posts/types';

const initialState = {
    data:       [],
    isFetching: false,
    congrats:   false,
    error:      '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, {
                data: [...state, ...payload],
            });

        case FETCH_POSTS_ERROR:
            return Object.assign({}, state, {
                error: payload,
            });

        case START_POSTS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case STOP_POSTS_FETCHING:
            return Object.assign({}, state, {
                isFetching: false,
            });

        case SHOW_CONGRATULATION:
            return Object.assign({}, state, {
                congrats: true,
            });

        default:
            return state;
    }
};
