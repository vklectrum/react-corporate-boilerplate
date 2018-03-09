import React, { Component } from 'react';
import { Form, Text } from 'react-form';

export default class ReactForm extends Component {
    state = {}

    render () {
        console.log('state', this.state);

        return (
            <div>
                <Form
                    onSubmit = { (submittedValues) => this.setState({ ...submittedValues }) }>
                    { (formApi) => (
                        <form id = 'form3' onSubmit = { formApi.submitForm }>
                            <label htmlFor = 'firstName2'>First name</label>
                            <Text field = 'firstName' id = 'firstName2' />
                            <label htmlFor = 'hobby1'>Hobby #1</label>
                            <Text field = { ['hobbies', 0] } id = 'hobby1' />
                            <label htmlFor = 'hobby2'>Hobby #1</label>
                            <Text field = { ['hobbies', 1] } id = 'hobby2' />
                            <button type = 'submit'>Submit</button>
                        </form>
                    )}
                </Form>
            </div>
        );
    }
}