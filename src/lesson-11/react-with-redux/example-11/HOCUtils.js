import React, { Component } from 'react';
import { log } from 'helpers';

function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withHover = (Injectable, options = { delay: 1000, color: 'fffee0' }) => {
    class WithHover extends Component {
        state = {
            hover: false,
        };

        _handleMouseEnter = () => this.setState({ hover: true });

        _handleMouseLeave = () => this.setState({ hover: false });

        render () {
            const { hover } = this.state;

            return (
                <span
                    onMouseEnter = { this._handleMouseEnter }
                    onMouseLeave = { this._handleMouseLeave }>
                    <Injectable hover = { hover } />
                </span>
            );
        }
    }

    WithHover.displayName = `WithHover(${getDisplayName(Injectable)})`;

    return WithHover;
};

export default withHover;
