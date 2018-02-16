import React, { Component } from 'react';
import { log } from 'helpers';

function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withLogging = (Injectable, options = { delay: 1000, color: 'f8075a' }) => {
    class WithLogging extends Component {
        componentWillMount () {
            const component = `${getDisplayName(Injectable)} component:`;
            const report = () => log(`${component} log to external service...`, options.color);

            report();

            this.log = setInterval(report, options.delay);
        }

        componentWillUnmount () {
            clearInterval(this.log);
        }

        render () {
            return <Injectable />;
        }
    }

    WithLogging.displayName = `WithLogging(${getDisplayName(Injectable)})`;

    return WithLogging;
};

export default (options) => (Injectable) => withLogging(Injectable, options);
