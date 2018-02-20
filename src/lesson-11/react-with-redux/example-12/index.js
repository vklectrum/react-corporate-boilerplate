import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Feed from './Feed';
import store from '../core/store';

render(
    <Provider store = { store }>
        <Feed />
    </Provider>,
    document.getElementById('root'),
);
