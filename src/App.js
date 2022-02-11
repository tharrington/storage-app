import './App.css';
import React, { useState } from 'react';

import Registration from './components/Users/Registration';
import UsersList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const registerUser = (fName, lName, email, password) => {
    console.log('### run');
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {
        first_name: fName,
        last_name: lName,
        email: email,
        id: prevUsersList.length + 1
      }];
    })
  };

  return (
    <React.Fragment>
      <header className="App-header">
        <Registration onRegisterUser={registerUser}></Registration>
        <UsersList users={usersList}></UsersList>
      </header>
    </React.Fragment>
  );
}

export default App;
