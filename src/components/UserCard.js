import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card   className="card" style={{ width: "15rem", margin: "20px" }}>
      
      <p className="profil">{user.name[0]}</p>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <p>{user.username}</p>
        <p>{user.address.city}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        
       
      </Card.Body>
    </Card>
  );
};

export default UserCard;
