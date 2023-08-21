import React, { useState } from 'react';
import './FormStyles.css';

function SendFrom() {
  alert('Form Submission!');
}

function RegistrationForm() {

  const [showPassword, setShowPassword] = useState(false);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.length < 2) {
      alert('Error Your First Name is less than 2 letters.');
      return;
    }

    if (lastName.length < 2) {
      alert('Error Your Last Name is less than 2 letters.');
      return;
    }

    if (!emailPattern.test(email)) {
      alert('Error Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Error Password is less than 6 letters.');
      return;
    }

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}/>
        <label>
          
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}/>
          {showPassword ? 'Hide' : 'Show'} Password </label>
      </div>  

        <div className="form-group">
        <button onClick={SendFrom}>Register</button>
        </div>

      </form>
    </div>
  );
}

export default RegistrationForm;
