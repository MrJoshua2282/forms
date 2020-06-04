import React from 'react';

import './Input.css';

const Input = (props) => {
    let element = null;
    let validationClass;
    let validationError = null;
    if (!props.valid && props.shouldValidate && props.touched) {
        validationClass = 'invalid-form1 ';
    }

    if (!props.valid && props.touched) {
        validationError = <p>Please enter a valid {props.valueType.toLowerCase()}</p>;
    }

    switch (props.elType) {
        case 'input':
            element = <input className={`input ${validationClass}`} {...props.properties} value={props.value} onChange={props.onChange} />;
            break;
        case 'textarea':
            element = <textarea className={`input ${validationClass}`} {...props.properties} value={props.value} onChange={props.onChange} />;
            break;
        case 'select':
            element = <select className={`input ${validationClass}`} value={props.value} onChange={props.onChange}>
                {props.properties.options.map((el, i) => {
                    return (<option key={i} value={el.value}>{el.displayValue}</option>)
                })}
            </select>;
            break;
        default:
            element = <input className={`input ${validationClass}`} {...props.properties} value={props.value} onChange={props.onChange} />;
    }

    return (
        <div className='inputDiv'>
            <label className='inputLabel'>{props.label}</label>
            {element}
            {validationError}
        </div>
    );
}

export default Input;