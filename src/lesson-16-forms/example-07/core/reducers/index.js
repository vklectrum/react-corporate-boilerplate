// Core
import { combineReducers } from 'redux';

// Instruments
import forms from './forms';
import login from './login';

export default combineReducers({
    forms,
    login,
});
