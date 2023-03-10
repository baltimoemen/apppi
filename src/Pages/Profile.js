import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const {id}= useParams();
  const [user, setUser]= useState({})
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then ((res)=>setUser(res.data[0]))
    .catch ((err)=>console.log(err));
   
  });
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <Card.Text>
          {user.name}
          {user.username}
          {user.email}
        </Card.Text>
        <Link to ={'/users}'}>Go back</Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Profile