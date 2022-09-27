import React, { useState } from 'react';
import '../User/User.css';
import data from '../Data/userData.json';
import UserInfo from '../userInfo/UserInfo';

// const [users, setUsers] = useState([]);

const userDetail = data.map(user => user);
// const handleClick = (userDetails) => {
//   const newUser = [...user, userDetails];
//   setUser(newUser);
// }

const User = (props) => {
    return (
      <>
        <div className='section'>
            <h1 className='heading'>User Loaded: {userDetail.length}</h1>
            <ol>
                {
                    userDetail.map( user => <li key={user._id}>{ user.name } <br></br></li> )
                }
            </ol>
        </div>

        <UserInfo></UserInfo>
      </>
    );
};

export default User;