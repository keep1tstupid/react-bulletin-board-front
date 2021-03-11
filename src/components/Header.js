import React from 'react'
import { Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const Header = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className={'pl-1'}>
          <Navbar.Brand>BB</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">All items</Nav.Link>
            <Nav.Link as={Link} to="/add">Add new item</Nav.Link>
            <Nav.Link as={Link} to="/moderation">Moderation</Nav.Link>
            {/*<Nav.Link as={Link} to="/"></Nav.Link>*/}
          </Nav>
          <Form inline>
            <Navbar.Text className="mr-sm-2"> {currentUser.username} </Navbar.Text>
            <Button variant="outline-light" size="sm">Logout</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
