import logo from './logo.svg';
import './App.css';
import User from './Components/User/User';
import { useState } from 'react';
import data from '../src/Components/Data/userData.json';

function App() {
  const userData = data;
  console.log(userData);
  const [user, setUser] = useState([]);
  return (
    <>
    {
      <ol>
        <li>
          {
            userData.map(user => user.name)
          }
        </li>
      </ol>
    }
    </>
  );
}

export default App;
