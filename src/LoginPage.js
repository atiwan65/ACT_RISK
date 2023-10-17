import React, { useState } from "react";
import './FormStyles.css';

function FromSend(){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendEmail = (event) => {
        setEmail(event.target.value)
    };

    const sendPassword = (event) => {
        setPassword(event.target.value)
    };

    const Submit = (event) => {
        event.preventDefault();

        let isError = false;

        if (!emailPattern.test(email)) {
            alert('Error Please enter a valid email address.');
            isError = true;
          }
    
        if (password.length < 6) {
          alert('Error Password is less than 6 letters.');
          isError = true;
        }

        if (!isError) {
            console.log('Email:', email);
            console.log('Password:', password);
            alert('Registration Successful');
        }
};

return (
    <div className='form-container'>
        <form onSubmit={Submit}>
        <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={sendEmail}></input>
        </div>

        <div className="form-group">
            <label>Password:</label>
        <input type={showPassword ? 'text' : 'password'}id="password"value={password}onChange={sendPassword}/>
        <label>
        <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>{showPassword ? 'Hide' : 'Show'} Password </label>
      </div>

        <div className="form-group">
        <button onClick={Submit}>Register</button>
        </div>
        </form>
    </div>
);
};

export default FromSend;