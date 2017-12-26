import React, { Component } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { fromTo } from 'gsap';
import { v4 } from 'uuid';

import Styles from './styles';

export default class Example extends Component {
    state = {
        todos: [],
        todo:  '',
    };

    hanldeInputChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    submitTodo = () => {
        this.setState(({ todos, todo }) => ({
            todos: [
                ...todos,
                {
                    id: v4(),
                    todo,
                }
            ],
            todo: '',
        }));
    };

    completeTodo = (id) => {
        this.setState(({ todos }) => ({
            todos: todos.filter(({ id: todoId }) => id !== todoId),
        }));
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
                x:          -300,
                y:          300,
                opacity:    0,
                rotationY:  1440,
                onComplete: () => console.log('• animation completed •'),
            }
        );
    };

    render () {
        const { todos, todo: newTodo } = this.state;

        const todosList = todos.map(({ todo, id }) => (
            <Transition
                key = { id }
                timeout = { 2000 }
                onEnter = { this.handleBallEnter }
                onExit = { this.handleBallExit }>
                <li onClick = { () => this.completeTodo(id) }>{todo}</li>
            </Transition>
        ));

        return (
            <section className = { Styles.room }>
                <input
                    placeholder = 'todo...'
                    type = 'text'
                    value = { newTodo }
                    onChange = { this.hanldeInputChange }
                />
                <button onClick = { this.submitTodo }>Todo!</button>
                <ul>
                    <TransitionGroup>{todosList}</TransitionGroup>
                </ul>
            </section>
        );
    }
}
