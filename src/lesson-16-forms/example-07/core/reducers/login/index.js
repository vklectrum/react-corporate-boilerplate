// Instruments
import {
    LOGIN_START,
    LOGIN_END
} from '../../actions/forms/types';

const initialState = {
    authFetching: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_START:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case LOGIN_END:
            return Object.assign({}, state, {
                isFetching: false,
            });

        default:
            return state;
    }
};
