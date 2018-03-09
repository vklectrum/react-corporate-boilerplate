// Instruments
import { FILL_FORM } from '../../actions/form/types';
import { random } from 'faker';

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FILL_FORM:
            return Object.assign({}, state, payload);

        default:
            return state;
    }
};
