import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Styles from './styles';

export default class Example extends Component {
    state = {
        show: true,
    };

    componentDidMount () {
        setInterval(() => {
            this.setState(({ show }) => ({
                show: !show,
            }));
        }, 2500);
    }

    render () {
        const { show } = this.state;

        return (
            <section className = { Styles.room }>
                <CSSTransition
                    appear
                    classNames = { {
                        appear:       Styles.initialAppearStart,
                        appearActive: Styles.initialAppearEnd,
                        enter:        Styles.inStart,
                        enterActive:  Styles.inEnd,
                        exit:         Styles.outStart,
                        exitActive:   Styles.outEnd,
                    } }
                    in = { show }
                    timeout = { 2500 }>
                    <div className = { Styles.ball } />
                </CSSTransition>
            </section>
        );
    }
}
