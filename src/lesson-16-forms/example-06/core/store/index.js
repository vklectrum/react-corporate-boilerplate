// Core
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Instruments
import reducer from '../reducers';
import { saga } from '../sagas/index';

const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

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
const middleware = [];

middleware.push(sagaMiddleware);

if (dev) {
    middleware.push(logger);
}

const composeEnhancers = dev && devtools ? devtools : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);

export default store;
