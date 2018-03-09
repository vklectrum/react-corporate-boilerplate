// Core
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// Instruments
import reducer from '../reducers/index';
import { saga } from '../sagas/index';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;
