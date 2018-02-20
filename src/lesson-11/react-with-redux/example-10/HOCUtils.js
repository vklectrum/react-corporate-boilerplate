/* eslint-disable react/forbid-component-props */
import React, { Component } from 'react';
import { log } from 'helpers';

function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withHover = (Injectable, options = { color1: 'red', color2: 'blue' }) => {
    class WithHover extends Component {
        state = {
            hover: false,
        };

        _handleMouseEnter = () => this.setState({ hover: true });

        _handleMouseLeave = () => this.setState({ hover: false });

        render () {
            const { hover } = this.state;

            const style = {
                color:      hover ? options.color1 : options.color2,
                fontSize:   hover ? options.fontSize : 20,
                transition: options.transition,
            };

            return (
                <span onMouseEnter = { this._handleMouseEnter } onMouseLeave = { this._handleMouseLeave }>
                    <Injectable style = { style } />
                </span>
            );
        }
    }

    WithHover.displayName = `WithHover(${getDisplayName(Injectable)})`;

    return WithHover;
};

export default (options) => (Injectable) => withHover(Injectable, options);
