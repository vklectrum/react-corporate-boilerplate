import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

    render () {
        const { todos, todo: newTodo } = this.state;

        const todosList = todos.map(({ todo, id }) => (
            <CSSTransition
                classNames = { {
                    enter:       Styles.inStart,
                    enterActive: Styles.inEnd,
                    exit:        Styles.outStart,
                    exitActive:  Styles.outEnd,
                } }
                key = { id }
                timeout = { { enter: 2500, exit: 1000 } }>
                <li onClick = { () => this.completeTodo(id) }>{todo}</li>
            </CSSTransition>
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
