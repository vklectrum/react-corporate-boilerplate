import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Form from './Form';
import store from '../core/store';

render(
    <Provider store = { store }>
        <Form />
    </Provider>,
    document.getElementById('root'),
);
