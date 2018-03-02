import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

import Styles from './styles';

export default class Example extends Component {
    state = {
        show: true,
    };

    showBall = () => {
        this.setState({
            show: true,
        });
    };

    hideBall = () => {
        this.setState({
            show: false,
        });
    };

    handleBallEnter = (ball) => {
        fromTo(
            ball,
            2,
            {
                x:         300,
                y:         300,
                opacity:   0,
                rotationY: 360,
            },
            {
                x:         0,
                y:         0,
                opacity:   1,
                rotationY: 0,
            }
        );
    };

    handleBallExit = (ball) => {
        fromTo(
            ball,
            2,
            {
                x:         0,
                y:         0,
                opacity:   1,
                rotationY: 0,
            },
            {
                x:         300,
                y:         300,
                opacity:   0,
                rotationY: 360,
            }
        );
    };

    render () {
        const { show } = this.state;

        return (
            <section className = { Styles.room }>
                <button onClick = { this.showBall }>Show</button>
                <button onClick = { this.hideBall }>Hide</button>
                <Transition
                    appear
                    in = { show }
                    timeout = { 2000 }
                    onEnter = { this.handleBallEnter }
                    onExit = { this.handleBallExit }>
                    <div className = { Styles.ball } />
                </Transition>
            </section>
        );
    }
}
