// Core
import { combineReducers } from 'redux';

// Instruments
import { i18nReducer } from './locale';

export default combineReducers({
    i18n: i18nReducer,
});
