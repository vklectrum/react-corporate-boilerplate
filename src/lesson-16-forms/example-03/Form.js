import React, { Component } from 'react';

export default class Form extends Component {
    state = {}

    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        console.log(formData.get('avatar'));

        fetch('/api/form-submit-url', {
            method: 'POST',
            body:   formData,
        });
    }

    render () {

        return (
            <div>
                <form onSubmit = { this.submitForm }>
                    <label htmlFor = 'file'>First name</label>
                    <input
                        required
                        id = 'file'
                        name = 'avatar'
                        type = 'file'
                    />
                    <input type = 'submit' value = 'Submit' />
                </form>
            </div>
        );
    }
}
