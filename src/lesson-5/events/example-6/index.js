import React, { Component } from 'react';

export default class Example extends Component {
    constructor () {
        super();

        this.handleChange = this._handleChange.bind(this);
    }

    state = {
        inputValue: '',
    };

    _handleChange (event) {
        console.log('•   previous state   •', this.state.inputValue);
        console.log('• change event value •', event.target.value);

        event.persist();

        this.setState(() => ({
            inputValue: event.target.value,
        }));

        // this.setState({
        //     inputValue: event.target.value,
        // });
    }

    render () {
        const { inputValue } = this.state;

        return (
            <section
                style = { {
                    height:          '50vh',
                    backgroundColor: 'wheat',
                    padding:         15,
                } }>
                <input
                    type = 'text'
                    value = { inputValue }
                    onChange = { this.handleChange }
                />
            </section>
        );
    }
}
