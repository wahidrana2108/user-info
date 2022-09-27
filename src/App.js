import logo from './logo.svg';
import './App.css';
import User from './Components/User/User';
import { useState } from 'react';
import data from '../src/Components/Data/userData.json';

function App() {
  const userData = data;

  const [user, setUser] = useState([]);
  const users = userData.map(user  => user._id);
  console.log(users);
  return (
    <>
    <h1>User Loaded: {user.length}</h1>
    {
        <ol>
            { userData.map(user  => <li key={user._id}> {user.name}</li>) }
        </ol>
    }
    <User></User>
    </>
  );
}

export default App;
