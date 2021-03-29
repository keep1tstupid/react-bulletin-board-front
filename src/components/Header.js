import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import AuthService from "../services/auth.service";

// todo: add 'my items' view to see own items and their states

const Header = () => {
  const currentUser = AuthService.getCurrentUser();
  useEffect(() => {
    const currentRoles = currentUser.roles;
    if (currentRoles.includes("ROLE_ADMIN") || currentRoles.includes("ROLE_MODERATOR")) {
      setModerationAvailable(true);
    }
  }, [currentUser]);

  const logOut = () => {
    AuthService.logout();
  };

  const [moderationAvailable, setModerationAvailable] = useState(false);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className={'pl-1'}>
          <Navbar.Brand>BB</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/home">All items</Nav.Link>
            {moderationAvailable && (
            <Nav.Link as={NavLink} to="/moderation">Moderation</Nav.Link>
            )}
          </Nav>
          <Form inline>
            <Navbar.Text className="mr-sm-2"> {currentUser.username} </Navbar.Text>
            <Button variant="outline-light" size="sm" href="/login" onClick={logOut}>Logout</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
