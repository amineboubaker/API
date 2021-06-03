
import axios from "axios";
import React, { useEffect, useState } from "react";

import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
// fetch method 
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users/")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setUsers(json);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  // axios method
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res => {
      setUsers(res.data);
      

  })
  .catch(err => console.log(err))
}, []);


  return <div className='user'>
      {
          users.map(user => <UserCard user={user}/>)
      }
  </div>;
};

export default UserList;
