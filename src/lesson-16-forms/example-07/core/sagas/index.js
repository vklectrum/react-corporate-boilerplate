// Core
import { all } from 'redux-saga/effects';

// Instruments
import form from './forms/index';

export function* saga () {
    yield all([
        form.submitFormWatcher()
    ]);
}
