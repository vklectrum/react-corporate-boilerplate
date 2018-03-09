// Core
import React, { Component, Fragment } from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

// Instruments
import { formActions } from './core/actions/forms';
import Styles from './styles';
import Input from './Input';
import { validateEmail, validateLength } from './validators';

class ReduxForm extends Component {
    submit = (data) => {
        this.props.submitForm(data);
    }

    render () {
        const { authFetching } = this.props.login;
        const disabledInputStyle = cx({
            [Styles.disabledInput]: authFetching,
        });
        const buttonStyle = cx(Styles.loginSubmit, {
            [Styles.disabledButton]: authFetching,
        });

        return (
            <Fragment>
                <Form
                    className = { Styles.form }
                    model = 'forms.login'
                    onSubmit = { this.submit }>
                    <Errors
                        messages = { {
                            valid: 'An email should a have a valid shape',
                        } }
                        model = 'forms.login.email'
                        show = { ({ submitFailed, touched, errors }) =>
                            submitFailed || touched && errors.valid }
                    />
                    <Input
                        disabled = { authFetching }
                        disabledstyle = { disabledInputStyle }
                        errors = { {
                            valid: (email) => !validateEmail(email),
                        } }
                        errorstyle = { Styles.error }
                        id = 'forms.login.email'
                        model = 'forms.login.email'
                        placeholder = 'Email'
                    />
                    <Errors
                        messages = { {
                            valid: () =>
                                `A password should be at least 5 symbols long`,
                        } }
                        model = 'forms.login.password'
                        show = { ({ submitFailed, touched, errors }) =>
                            submitFailed || touched && errors.valid }
                    />
                    <Input
                        disabled = { authFetching }
                        disabledstyle = { disabledInputStyle }
                        errors = { {
                            valid: (password) => validateLength(password, 5),
                        } }
                        errorstyle = { Styles.error }
                        id = 'forms.login.password'
                        model = 'forms.login.password'
                        placeholder = 'Password'
                        type = 'password'
                    />

                    <label>
                        <Control.checkbox
                            id = 'forms.login.remember'
                            model = 'forms.login.remember'
                            type = 'checkbox'
                        />
                        Remember me?
                    </label>

                    <button>
                        Log In
                    </button>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ login }) => ({
    login,
});

const mapDispatchToProps = (dispatch) => ({
    submitForm: bindActionCreators(formActions.submitForm, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
