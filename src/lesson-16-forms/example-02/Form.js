import React, { Component } from 'react';

export default class Form extends Component {
    state = {}

    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body:   formData,
        });
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
                    />
                    <label htmlFor = 'hobby1'>Hobby #1</label>
                    <input
                        required
                        id = 'hobby1'
                        name = 'hobby_0'
                    />
                    <label htmlFor = 'hobby2'>Hobby #1</label>
                    <input
                        required
                        id = 'hobby2'
                        name = 'hobby_1'
                    />
                    <input type = 'submit' value = 'Submit' />
                </form>
            </div>
        );
    }
}
