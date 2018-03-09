// Core
import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { formActions } from '../../../../actions/forms';

export function* submitForm ({ payload }) {
    try {
        yield put(formActions.submitFormSuccess(payload));
    } catch ({ message }) {
        console.log(message);
    } finally {
        yield put(actions.reset('forms.login'));
    }
}
