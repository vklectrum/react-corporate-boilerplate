// Core
import { createStore } from 'redux';

// Instrumnets
import rootReducer from '../reducers';

export default createStore(rootReducer /* persisted state */ /* middleware */);
