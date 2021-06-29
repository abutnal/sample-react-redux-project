import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Header = () => {
  return (<>
    <Navbar bg="info" sticky="top" variant="light">
      <Navbar.Brand href="/">MyBrand</Navbar.Brand>
      <Nav className="mr-auto">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/posts">Posts</Link>
          <Link className="nav-link" to="/about">About Us</Link>
      </Nav>
    </Navbar>
  </>)
}

export default Header;