// Instruments
import { LOGIN, LOGOUT } from './types';
import { lorem } from 'faker';
import { replace } from 'react-router-redux';

export const login = () => ({
    type: LOGIN,
});

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    dispatch(replace('/login'));

    // console.log('•λ•', replace('/login'));
};
