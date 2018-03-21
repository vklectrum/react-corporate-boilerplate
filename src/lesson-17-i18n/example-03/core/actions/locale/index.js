// Instruments
import { LOCALE_CHANGE } from './types';

export const localeChange = (locale) => ({
    type:    LOCALE_CHANGE,
    payload: locale,
});

export const updateLocale =
    (nextLocale) => (dispatch) => dispatch(localeChange(nextLocale));
