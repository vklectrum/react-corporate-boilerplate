// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import {
    SUBMIT_FORM
} from '../../actions/forms/types';
import { submitForm } from './workers/submitForm';

export default {
    * submitFormWatcher () {
        yield takeEvery(SUBMIT_FORM, submitForm);
    },
};
