import React from 'react'

const RegisterUser = (props) => {
  const registerUserHandler = (event) => {
    console.log('### reg');
    event.preventDefault();
  }

  return (
    <form onSubmit={registerUserHandler}>
      <label htmlFor="email">Email</label>
      <input id="email" type="text"></input>

      <label htmlFor="password">Password</label>
      <input id="password" type="password"></input>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterUser;