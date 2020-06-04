import React, { Component } from 'react';

import './Body2.css';

class Body extends Component {
    constructor(props) {
        super(props)
        this.fullNameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.emailRef = React.createRef();
    }
    state = {
        submitted: false,
    }

    displayHandler = (event) => {
        const { name } = event.target;
        if (name === 'username') document.querySelector('.form2-body-username-req').style.display = 'block';
        if (name === 'password') document.querySelector('.form2-body-password-req').style.display = 'block';
    }

    blurHandler = (event) => {
        const { name } = event.target;
        if (name === 'username') document.querySelector('.form2-body-username-req').style.display = 'none';
        if (name === 'password') document.querySelector('.form2-body-password-req').style.display = 'none';
    }

    inputHandler = (event) => {
        const { value, name } = event.target;
        const username = {
            special: document.querySelector('.special'),
            upperUsr: document.querySelector('.upper-usr'),
            consNum: document.querySelector('.consNum'),
            sixLength: document.querySelector('.sixLength'),
        }

        const psw = {
            lowerPsw: document.querySelector('.lower-psw'),
            upperPsw: document.querySelector('.upper-psw '),
            oneNum: document.querySelector('.oneNum'),
            eightLength: document.querySelector('.eightLength'),
        }

        if (name === 'username') {
            if (value.search(/[!@#$%^&*()?]/g) >= 0) {
                username.special.classList.add('valid');
                username.special.classList.remove('invalid');
            } else {
                username.special.classList.remove('valid');
                username.special.classList.add('invalid');
            }
            if (value.search(/[A-Z]/g) >= 0) {
                username.upperUsr.classList.add('valid');
                username.upperUsr.classList.remove('invalid');
            } else {
                username.upperUsr.classList.remove('valid');
                username.upperUsr.classList.add('invalid');
            }
            if (value.search(/\d\d/g) >= 0) {
                username.consNum.classList.add('valid');
                username.consNum.classList.remove('invalid');
            } else {
                username.consNum.classList.remove('valid');
                username.consNum.classList.add('invalid');
            }
            if (value.length > 5) {
                username.sixLength.classList.add('valid');
                username.sixLength.classList.remove('invalid');
            } else {
                username.sixLength.classList.remove('valid');
                username.sixLength.classList.add('invalid');
            }
        }

        if (name === 'password') {
            if (value.search(/[a-z]/g) >= 0) {
                psw.lowerPsw.classList.add('valid');
                psw.lowerPsw.classList.remove('invalid');
            } else {
                psw.lowerPsw.classList.remove('valid');
                psw.lowerPsw.classList.add('invalid');
            }
            if (value.search(/[A-Z]/g) >= 0) {
                psw.upperPsw.classList.add('valid');
                psw.upperPsw.classList.remove('invalid');
            } else {
                psw.upperPsw.classList.remove('valid');
                psw.upperPsw.classList.add('invalid');
            }
            if (value.search(/\d/g) >= 0) {
                psw.oneNum.classList.add('valid');
                psw.oneNum.classList.remove('invalid');
            } else {
                psw.oneNum.classList.remove('valid');
                psw.oneNum.classList.add('invalid');
            }
            if (value.length > 7) {
                psw.eightLength.classList.add('valid');
                psw.eightLength.classList.remove('invalid');
            } else {
                psw.eightLength.classList.remove('valid');
                psw.eightLength.classList.add('invalid');
            }
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        const form = {
            fullName: this.fullNameRef.current.value,
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value,
            email: this.emailRef.current.value
        }

        console.log(form);
        this.setState({ submitted: true });

        // axios.post('/api/signup', form)
        //         .then(result => {
        //         `console.log(result)`}.catch(err => {
        //         `console.log(result);`
        //     }))
    }

    render() {

        return (
            <form onSubmit={this.submitForm} className='form2-body'>
                {!this.state.submitted &&
                    <div className='form2-body-div'>
                        <p style={{ textAlign: 'center' }}><b>Sign Up</b></p>
                        <label htmlFor='full-name' className='form2-body-label' >Full Name</label><br />
                        <input id='full-name' type='text' className='form2-body-input' required pattern="(?=.*[a-zA-Z]).{1,}" title='Name cannot be empty' ref={this.fullNameRef} /><br />
                        <label htmlFor='username' name='username' className='form2-body-label'  >Username</label><br />
                        <input onChange={e => this.inputHandler(e)} onBlur={e => this.blurHandler(e)} onFocus={e => this.displayHandler(e)} id='username' name='username' type='text' className='form2-body-input' required pattern='(?=.*[!@#$%^&*()?])(?=.*\d\d)(?=.*[A-Z]).{6,}' title='Username must contain a special character (!@#$%^&*()?), an uppercase letter, two consecutive numbers, and at least 6 characters' ref={this.usernameRef} /><br />
                        <div className='form2-body-username-req'>
                            <p className='special invalid'>Must contain a special character (!@#$%^&*()?)</p>
                            <p className='upper-usr invalid'>Must contain an uppercase letter</p>
                            <p className='consNum invalid'>Must contain two consecutive numbers</p>
                            <p className='sixLength invalid'>Must contain at least 6 characters</p>
                        </div>
                        <label htmlFor='password-form2' className='form2-body-label' >Password</label><br />
                        <input onChange={e => this.inputHandler(e)} onBlur={e => this.blurHandler(e)} onFocus={e => this.displayHandler(e)} id='password-form2' name='password' type='password' className='form2-body-input' required pattern="(?=.*[a-z])(?=.*\d)(?=.*[A-Z]).{8,}" title='Password must contain one lowercase letter, one uppercase letter, one number, and at least 8 characters' ref={this.passwordRef} /><br />
                        <div className='form2-body-password-req'>
                            <p className='lower-psw invalid'>Must contain an lowercase letter</p>
                            <p className='upper-psw invalid'>Must contain an uppercase letter</p>
                            <p className='oneNum invalid'>Must contain a number</p>
                            <p className='eightLength invalid'>Must contain at least 8 characters</p>
                        </div>
                        <label htmlFor='email-form2' className='form2-body-label' >Email</label><br />
                        <input id='email-form2' type='email' className='form2-body-input' required ref={this.emailRef} /><br />
                        <button className='form2-body-btn' type='submit'>Submit</button>
                    </div>}
                {this.state.submitted &&
                    <div className='submitted-form2-div'>
                        <p>fullName: {this.fullNameRef.current.value}</p>
                        <p>username: {this.usernameRef.current.value}</p>
                        <p>password: {this.passwordRef.current.value}</p>
                        <p>email: {this.emailRef.current.value}</p>
                    </div>
                }
            </form>
        );
    };
};

export default Body;