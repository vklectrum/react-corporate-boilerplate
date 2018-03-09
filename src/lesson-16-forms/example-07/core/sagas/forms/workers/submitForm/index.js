// Core
import { call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions } from 'react-redux-form';

// Instruments
import { formActions } from '../../../../actions/forms';

export function* submitForm ({ payload }) {
    try {
        yield put(formActions.loginStart());
        yield call(delay, 1500);
        yield put(formActions.submitFormSuccess(payload));
    } catch ({ message }) {
        console.log(message);
    } finally {
        yield put(actions.reset('forms.login'));
        yield put(formActions.loginEnd());
    }
}
