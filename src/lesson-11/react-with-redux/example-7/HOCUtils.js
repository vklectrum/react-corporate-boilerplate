import React, { Component } from 'react';
import { log } from 'helpers';

function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withLogging = (Injectable) => {
    class WithLogging extends Component {
        componentWillMount () {
            const component = `${getDisplayName(Injectable)} component:`;
            const report = () => log(`${component} log to external service...`, 'f8075a');

            report();

            this.log = setInterval(report, 1000);
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

export default withLogging;
