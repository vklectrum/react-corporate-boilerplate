// Core
import React, { Component, Fragment } from 'react';
import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { formActions } from './core/actions/forms';

class ReduxForm extends Component {
    submit = (data) => {
        this.props.submitForm(data);
    }

    render () {
        return (
            <Fragment>
                <Form
                    model = 'forms.login'
                    onSubmit = { this.submit }>
                    <label htmlFor = 'forms.login.email'>Email:</label>
                    <Control.text
                        id = 'forms.login.email'
                        model = 'forms.login.email'
                        placeholder = 'Email'
                        type = 'email'
                    />

                    <label htmlFor = 'forms.login.password'>Password:</label>
                    <Control.text
                        id = 'forms.login.password'
                        model = 'forms.login.password'
                        placeholder = 'Password'
                        type = 'password'
                    />

                    <label htmlFor = 'login.remember'>Remember me:</label>
                    <Control.checkbox
                        id = 'forms.login.remember'
                        model = 'forms.login.remember'
                    />

                    <button type = 'submit'>
                        Login
                    </button>
                </Form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    submitForm: bindActionCreators(formActions.submitForm, dispatch),
});

export default connect(null, mapDispatchToProps)(ReduxForm);
