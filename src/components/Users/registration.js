import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './Registration.module.css';
import Button from '../UI/Button';

const Registration = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const registerUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
    setEnteredPassword('');
    setEnteredEmail('');
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  }
 
  return (
    <Card className={classes.input}>
      <form onSubmit={registerUserHandler}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={emailChangeHandler}></input>

        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={passwordChangeHandler}></input>
        <Button type="submit">Register</Button>
      </form>
    </Card>
  );
}

export default Registration;