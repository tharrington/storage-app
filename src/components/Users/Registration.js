import React, { useState, useRef } from 'react'

import Card from '../UI/Card';
import classes from './Registration.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const Registration = (props) => {
  const fNameInputRef = useRef();
  const lNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState('');

  const registerUserHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFName = fNameInputRef.current.value;
    const enteredLName = lNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if(enteredEmail.trim().length === 0 || enteredFName.trim().length === 0 || enteredLName.trim().length === 0 || enteredPassword.trim().length <= 3) {
      setError({
        title: 'Invalid input',
        message: 'Fill out all inputs'
      })
      return;
    }
    props.onRegisterUser(enteredFName, enteredLName, enteredEmail, enteredPassword);
    fNameInputRef.current.value = '';
    lNameInputRef.current.value = '';
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  }
  const errorHandler = () => {
    setError(null);
  }
 
  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={registerUserHandler}>
          <label htmlFor="first_name">First Name</label>
          <input id="first_name" type="text" ref={fNameInputRef}></input>

          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" type="text" ref={lNameInputRef}></input>

          <label htmlFor="email">Email</label>
          <input id="email" type="text" ref={emailInputRef}></input>

          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordInputRef}></input>

          <Button type="submit">Register</Button>
        </form>
      </Card>
    </React.Fragment>

  );
}

export default Registration;