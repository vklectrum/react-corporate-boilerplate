// Core
import React, { Component } from 'react';

const transform = (
    Injectable,
    { viewBoxWidth = 0, viewBoxHeight = 0, width = 0, height = 0 } = {},
) =>
    class SVG extends Component {
        static defaultProps = {
            color1: '#f00',
            width,
            height,
        };

        state = {
            hover:   false,
            checked: false,
        };

        _getInjectableProps = () => {
            const injectableProps = Object.assign({}, this.state, this.props);

            delete injectableProps.width;
            delete injectableProps.height;

            return injectableProps;
        }

        _getSvgStyle = () => {
            const { width: w, height: h } = this.props;

            return Object.assign({}, { width: w, height: h });
        }

        _handleDeleteTodoMouseEnter = () =>
            this.setState(() => ({
                hover: true,
            }));

        _handleDeleteTodoMouseLeave = () =>
            this.setState(() => ({
                hover: false,
            }));

        _handleClick = () =>
            this.setState(({ checked }) => ({
                checked: !checked,
            }));

        render () {
            const svgStyle = this._getSvgStyle();
            const injectableProps = this._getInjectableProps();

            return (
                <span
                    style = { {
                        lineHeight: 0,
                    } }
                    onClick = { this.props.onClick || this._handleClick }
                    onMouseEnter = { this._handleDeleteTodoMouseEnter }
                    onMouseLeave = { this._handleDeleteTodoMouseLeave }>
                    <svg
                        style = { svgStyle }
                        version = '1.1'
                        viewBox = { `0 0 ${viewBoxWidth} ${viewBoxHeight}` }>
                        <Injectable { ...injectableProps } />
                    </svg>
                </span>
            );
        }
    };

export const withSvg = (config) => (Injectable) => transform(Injectable, config);
