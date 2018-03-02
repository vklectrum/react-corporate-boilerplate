// Core
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const navigator = (function* () {
    let route = 0;

    while (true) {
        yield history.push(`/new-address-${route++}${route % 2 ? '?the=query' : ''}`, {
            title: `A ${route} route titile`,
            meta:  `an object with a meta info for a ${route} route`,
        });
    }
}());
