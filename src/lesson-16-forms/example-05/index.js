import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ReactForm from './ReactForm';
import store from '../core/store';

render(
    <Provider store = { store }>
        <ReactForm />
    </Provider>,
    document.getElementById('root'),
);
