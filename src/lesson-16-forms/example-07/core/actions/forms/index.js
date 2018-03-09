// Instruments
import {
    LOGIN_START,
    LOGIN_END,
    SUBMIT_FORM,
    SUBMIT_FORM_SUCCESS
} from './types';


export const formActions = Object.freeze({
    loginStart: (payload) => ({
        type: LOGIN_START,
    }),
    loginEnd: () => ({
        type: LOGIN_END,
    }),
    submitForm: (payload) => ({
        type: SUBMIT_FORM,
        payload,
    }),
    submitFormSuccess: (payload) => ({
        type: SUBMIT_FORM_SUCCESS,
        payload,
    }),
});
