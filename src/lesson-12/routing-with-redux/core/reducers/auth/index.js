// Instruments
import { LOGIN, LOGOUT } from '../../actions/auth/types';
import { random } from 'faker';

const initialState = {
    authenticated: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return Object.assign({}, state, {
                authenticated: true,
            });

        case LOGOUT:
            return Object.assign({}, state, {
                authenticated: false,
            });

        default:
            return state;
    }
};
