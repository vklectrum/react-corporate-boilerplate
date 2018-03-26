// Core
import React, { Component } from 'react';

export class Main extends Component {
    constructor () {
        super();

        this.handleTextAreaChange = ::this._handleTextAreaChange;
        this.handleSubmit = this._handleSubmit.bind(this);
    }

    state = {
        message: '',
        posts:   [],
    }

    _handleTextAreaChange ({ target: { value } }) {
        this.setState(() => ({
            message: value,
        }));
    }

    _handleSubmit (event) {
        event.preventDefault();
        const { message } = this.state;

        this.setState(({ posts }) => ({
            posts:   [{ message }, ...posts],
            message: '',
        }));
    }

    render () {
        const { message, posts } = this.state;
        const postsItems = posts.map(({ message: text }, index) => <li key = { index }>{ text }</li>);

        return (
            <section>
                <form
                    onSubmit = { this.handleSubmit } >
                    <textarea
                        value = { message }
                        onChange = { this.handleTextAreaChange }
                    />
                    <input type = 'submit' value = { 'Add message' } />
                </form>
                <ul>
                    { postsItems }
                </ul>
            </section>
        );
    }
}
