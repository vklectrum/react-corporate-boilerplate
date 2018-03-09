// Instruments
import {
    SUBMIT_FORM,
    SUBMIT_FORM_SUCCESS
} from './types';


export const formActions = Object.freeze({
    submitForm: (payload) => ({
        type: SUBMIT_FORM,
        payload,
    }),
    submitFormSuccess: (payload) => ({
        type: SUBMIT_FORM_SUCCESS,
        payload,
    }),
});
