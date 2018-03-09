// Core
import { combineForms } from 'react-redux-form';

export default combineForms(
    {
        login: {
            email:    '',
            password: '',
            remember: false,
        },
    },
    'forms',
);
