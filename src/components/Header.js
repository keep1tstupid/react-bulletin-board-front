
import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link} from "react-router-dom";

const Header = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container className={'pl-1'}>
        <Navbar.Brand>BB</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home" >All items</Nav.Link>
          <Nav.Link as={Link} to="/add">Add new item</Nav.Link>
          <Nav.Link as={Link} to="/">Moderation</Nav.Link>
          <Nav.Link as={Link} to="/"></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default Header;
