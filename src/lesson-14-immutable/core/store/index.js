// Core
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

// Instruments
import reducer from '../reducers';
import { sync } from './middleware';

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

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddleware = createRouterMiddleware(history);

const middleware = [routerMiddleware, thunk, /* sync, */ logger];

const persistedState = JSON.parse(localStorage.getItem('@@persistedState'));

export { history };
export default (() =>
    persistedState
        ? createStore(reducer, persistedState, applyMiddleware(...middleware))
        : createStore(reducer, applyMiddleware(...middleware)))();
