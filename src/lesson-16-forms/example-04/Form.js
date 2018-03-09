// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { fillForm } from '../core/actions/form';

class Form extends Component {
    state = {
        firstName: '',
        hobby:     ['', ''],
    }

    submitForm = (e) => {
        e.preventDefault();

        console.log(JSON.stringify(this.props.form, null, 2));
    }

    change = ({ target }) => {
        const { form } = this.props;
        const fields = target.name.split('_');

        if (fields.length > 1) {
            const arr = form[fields[0]] || [];
            arr[fields[1]] = target.value;

            form[fields[0]] = arr;
        } else {
            form[target.name] = target.value;
        }

        this.props.actions.fillForm(form);
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

const mapStateToProps = ({ form }) => ({
    form,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ fillForm }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
