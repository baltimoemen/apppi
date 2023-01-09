import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation