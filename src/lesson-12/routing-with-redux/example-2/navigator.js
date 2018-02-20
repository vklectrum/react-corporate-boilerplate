export const navigator = (function* () {
    let route = 0;

    while (true) {
        yield window.history.pushState(
            { meta: `an object with a meta info for a ${route} route` },
            `A ${route} route titile`,
            `/new-address-${route++}`,
        );
    }
}());
