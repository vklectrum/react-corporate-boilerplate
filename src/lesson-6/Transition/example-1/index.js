import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

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
        }, 2000);
    }

    handleBallEnter = () => {
        const { ball } = this;

        fromTo(
            ball,
            2,
            {
                x: 300,
                y: 300,
            },
            {
                x: 0,
                y: 0,
            }
        );
    };

    handleBallExit = () => {
        const { ball } = this;

        fromTo(
            ball,
            2,
            {
                x: 0,
                y: 0,
            },
            {
                x: 300,
                y: 300,
            }
        );
    };

    render () {
        const { show } = this.state;

        return (
            <section className = { Styles.room }>
                <Transition
                    in = { show }
                    timeout = { 2000 }
                    onEnter = { this.handleBallEnter }
                    onExit = { this.handleBallExit }>
                    <div
                        className = { Styles.ball }
                        ref = { (ball) => this.ball = ball }
                    />
                </Transition>
            </section>
        );
    }
}
