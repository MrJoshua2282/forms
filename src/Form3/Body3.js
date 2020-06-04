import React, { useState, useEffect } from 'react';

import './Body3.css';

const Body3 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [signUp, setSignUp] = useState(false);

    const signedUpHandler = (event) => {
        setSignUp(true);
    }

    const pageHandler = (event) => {
        // event.preventDefault();
        const { name } = event.target;
        if (name === 'next') { setCurrentPage(count => count + 1); }
        if (name === 'previous') { setCurrentPage(count => count - 1); }
    }

    useEffect(() => {
        const circle1 = document.querySelector('.c1');
        const circle2 = document.querySelector('.c2');
        const circle3 = document.querySelector('.c3');
        if (currentPage === 1) {
            circle1.classList.add('active');
            circle1.classList.remove('good');

            circle2.classList.remove('active');
            circle2.classList.add('inactive');
            circle2.classList.remove('good');

            circle3.classList.remove('active');
            circle3.classList.add('inactive');
        }
        if (currentPage === 2) {
            circle1.classList.remove('active');
            circle1.classList.add('good');

            circle2.classList.add('active');
            circle2.classList.remove('inactive');
            circle2.classList.remove('good');

            circle3.classList.remove('active');
            circle3.classList.add('inactive');
        }

        if (currentPage === 3) {
            circle1.classList.remove('active');
            circle1.classList.add('good');

            circle2.classList.remove('active');
            circle2.classList.remove('inactive');
            circle2.classList.add('good');

            circle3.classList.add('active');
            circle3.classList.remove('inactive');
        }

    }, [currentPage]);

    return (
        <form className='form3-body'>
            {signUp && <div className='form3-success'> Registration Successful</div>}
            {!signUp && <h1 className='center'>Registration Form</h1>}
            {currentPage === 1 && !signUp ? <div>
                <h1 className='center'>Personal Information</h1>
                <input type='text' className='form3-input' id='form3_fname' placeholder='First Name' required onChange={e => setFirstName(e.target.value)} value={firstName} />
                <input type='text' className='form3-input' id='form3_lname' placeholder='Last Name' required onChange={e => setLastName(e.target.value)} value={lastName} />
                <input type='number' className='form3-input' id='form3_age' placeholder='Age' required onChange={e => setAge(e.target.value)} value={age} />

                {firstName.length > 0 && lastName.length > 0 && age > 9 ?
                    <div className='form3-body-btn'>
                        <button onClick={e => pageHandler(e)} name='next'>Next</button>
                    </div>
                    : null}

            </div> : null
            }
            {currentPage === 2 && !signUp ? <div>
                <h1 className='center'>Location</h1>
                <input type='text' className='form3-input' id='form3_city' placeholder='Current City / Town' required onChange={e => setCity(e.target.value)} value={city} />
                <input type='text' className='form3-input' id='form3_state' placeholder='State' required onChange={e => setState(e.target.value)} value={state} />
                <input type='zip' className='form3-input' id='form3_zip' placeholder='Zip Code' required onChange={e => setZip(e.target.value)} value={zip} />
                {city.length > 0 && state.length > 0 && zip.length >= 5 ?
                    <div className='form3-body-btn'>
                        <button onClick={e => pageHandler(e)} name='previous'>Previous</button>
                        <button onClick={e => pageHandler(e)} name='next'>Next</button>
                    </div>
                    : null}
            </div> : null
            }
            {currentPage === 3 && !signUp ? <div>
                <h1 className='center'>Account Information</h1>
                <input type='text' className='form3-input' id='form3_usr' placeholder='Username' required onChange={e => setUsername(e.target.value)} value={username} />
                <input type='password' className='form3-input' id='form3_psw' placeholder='Password' required onChange={e => setPassword(e.target.value)} value={password} />
                <input type='password' className='form3-input' id='form3_pswConf' placeholder='Confirm Password' required onChange={e => setPasswordConfirm(e.target.value)} value={passwordConfirm} />
                {username.length > 0 && password.length > 0 && password === passwordConfirm ?
                    <div className='form3-body-btn'>
                        <button onClick={e => pageHandler(e)} name='previous'>Previous</button>
                        <button onClick={e => signedUpHandler(e)}>Submit</button>
                    </div>
                    : null}
            </div> : null
            }
            {!signUp && <div className='div-circle'>
                <span className='circle c1'>&nbsp;</span>
                <span className='circle c2'>&nbsp;</span>
                <span className='circle c3'>&nbsp;</span>
            </div>}
        </form >
    );
};

export default Body3;