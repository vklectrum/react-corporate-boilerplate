import localeData from '../../../messages';
import { LOCALE_CHANGE } from '../../actions/locale/types';

const defaultLanguage = 'uk';
const initialState = {
    locale:   defaultLanguage,
    messages: localeData[defaultLanguage],
};

export const i18nReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOCALE_CHANGE:
            return {
                locale:   payload,
                messages: localeData[payload],
            };
        default:
            return state;
    }
};
