import React, { Component } from 'react';

import './Body.css';
import Input from './Input/Input';

class Body extends Component {
    state = {
        formObj: '',
        form: [
            // Name
            { id: 'Name', valid: false, validation: { required: true, touched: false }, elType: 'input', properties: { type: 'text', placeholder: 'Name' }, value: '' },

            // Street
            { id: 'Street', valid: false, validation: { required: true, touched: false }, elType: 'input', properties: { type: 'text', placeholder: 'Street' }, value: '' },

            // Zip Code
            { id: 'Zip Code', valid: false, validation: { required: true, minLength: 5, touched: false }, elType: 'input', properties: { type: 'text', placeholder: 'Zip Code' }, value: '' },

            // Country
            { id: 'Country', valid: false, validation: { required: true, touched: false }, elType: 'input', properties: { type: 'text', placeholder: 'Country' }, value: '' },

            // Email
            { id: 'Email', valid: false, validation: { required: true, touched: false }, elType: 'input', properties: { type: 'email', placeholder: 'Email' }, value: '' },

            // Delivery choice
            {
                id: 'Delivery',
                valid: true,
                validation: {},
                elType: 'select',
                value: 'fastest',
                properties: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                }
            },
        ],
        formIsValid: false
    }

    checkValidity(value, validation) {
        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }
        return isValid;
    }

    inputChangeHandler = (event, itemId) => {
        const { value } = event.target;

        let copyForm = [...this.state.form];

        copyForm = copyForm.map((el, i) => {
            if (i === itemId) {
                el.value = value;
                el.valid = this.checkValidity(el.value, el.validation);
                el.touched = true;
            }
            return el;
        });

        let formIsValid = true;
        formIsValid = this.state.form.every(el => el.valid && formIsValid);
        // console.log(copyForm);
        this.setState({ form: copyForm, formIsValid: formIsValid });
    }

    submitHandler = (event) => {
        event.preventDefault();

        let formObj = this.state.form.reduce((acc, el, i) => {
            acc[el.id] = el.value;
            return acc;
        }, {});

        this.setState({ formObj: formObj });
        console.log(formObj);
    }

    render() {
        let inputs = this.state.form.map((el, i) => {
            return <Input
                key={i}
                elType={el.elType}
                value={el.value}
                properties={el.properties}
                onChange={(event) => this.inputChangeHandler(event, i)}
                valid={el.valid}
                shouldValidate={el.validation}
                touched={el.touched}
                valueType={el.id}
            />
        });

        return (
            <form className='form1-body' onSubmit={e => this.submitHandler(e)}>
                <p className='form1-create-account'>create account</p>
                {inputs}
                <button className='form1Btn' disabled={!this.state.formIsValid}>Join the crew!</button>
            </form>
        );
    };
};

export default Body;