// Core
import { addLocaleData } from 'react-intl';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import uk from 'react-intl/locale-data/uk';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...uk, ...ru]);

// Instruments
import reducer from '../reducers/index';

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

const middleware = [thunk, logger];

export default createStore(reducer, applyMiddleware(...middleware));
