import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types'


export default function Header(props) {
  return (

    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.defaultProps={
  title: "Your Title Here"
}

Header.propTypes={
  title: PropTypes.string
}
