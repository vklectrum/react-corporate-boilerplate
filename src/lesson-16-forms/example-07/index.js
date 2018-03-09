import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ReduxForm from './ReduxForm';
import store from './core/store';

render(
    <Provider store = { store }>
        <ReduxForm />
    </Provider>,
    document.getElementById('root'),
);
