import React, { Component } from 'react';

export default class Form extends Component {
    state = {}

    submitForm = (e) => {
        e.preventDefault();

        console.log(this.state);
    }

    change = ({ target }) => {
        const fields = target.name.split('_');
        if (fields.length > 1) {
            this.setState((prevState) => {
                const arr = prevState[fields[0]] || [];
                arr[fields[1]] = target.value;

                return {
                    [fields[0]]: arr,
                };
            });
        } else {
            this.setState({
                [target.name]: target.value,
            });
        }
    }

    render () {

        return (
            <div>
                <form onSubmit = { this.submitForm }>
                    <label htmlFor = 'firstName2'>First name</label>
                    <input
                        required
                        id = 'firstName2'
                        name = 'firstName'
                        onChange = { this.change }
                    />
                    <label htmlFor = 'hobby1'>Hobby #1</label>
                    <input
                        required
                        id = 'hobby1'
                        name = 'hobby_0'
                        onChange = { this.change }
                    />
                    <label htmlFor = 'hobby2'>Hobby #1</label>
                    <input
                        required
                        id = 'hobby2'
                        name = 'hobby_1'
                        onChange = { this.change }
                    />
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        );
    }
}
