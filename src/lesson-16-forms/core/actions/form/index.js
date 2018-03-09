// Instruments
import { FILL_FORM } from './types';


const fillFormAc = (payload) => ({
    type: FILL_FORM,
    payload,
});

export const fillForm = (data) =>
    (dispatch) => {
        dispatch(fillFormAc(data));
    };
