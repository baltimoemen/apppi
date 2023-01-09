import React from 'react'
import {Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Card.css'

const UserCard = ({user}) => {
  return (
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <Card.Text>
          {user.name}
          {user.username}
          {user.email}
        </Card.Text>
        <Link to ={`/user/${user.id}`}>Go check the profile</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard