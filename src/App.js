import './App.css';
import Registration from './components/Users/Registration';
import UserList from './components/Users/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Registration></Registration>
        <UserList></UserList>
      </header>
    </div>
  );
}

export default App;
