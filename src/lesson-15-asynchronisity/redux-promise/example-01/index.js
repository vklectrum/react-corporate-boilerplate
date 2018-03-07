import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Thunk from './Thunk';
import store from '../core/store';

render(
    <Provider store = { store }>
        <Thunk />
    </Provider>,
    document.getElementById('root'),
);
