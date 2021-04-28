import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import { addNewUser } from "../../redux/users-actions";
import {setNotification} from "../../redux/notification-actions";


const AddUser = (props) => {
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    username: "",
    password: "",
    email: "",
    role: "",
  }

  const [user, setUser] = useState(INITIAL_STATE);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const inputChanged = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewUser(user));
    setUser(INITIAL_STATE);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>

      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        show={show}
        onHide={handleClose}
        onExit={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formTitle'>
              <Form.Label>Username: </Form.Label>
              <Form.Control
                type='text'
                name='username'
                placeholder='Enter username'
                value={user.username}
                onChange={inputChanged}
                required
              />
            </Form.Group>

            <Form.Group controlId='formTitle'>
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type='text'
                name='password'
                placeholder='Enter password'
                value={user.password}
                onChange={inputChanged}
                required
              />
            </Form.Group>

            <Form.Group controlId='formTitle'>
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type='text'
                name='email'
                placeholder='Enter email'
                value={user.email}
                onChange={inputChanged}
                required
              />
            </Form.Group>

            <Form.Group controlId='roleSelector'>
              <Form.Label>Role: </Form.Label>
              <Form.Control
                as='select'
                name='role'
                onChange={inputChanged}
                defaultValue={'SELECT'}
              >
                {/*<option disabled value="" selected hidden> SELECT </option>*/}
                <option disabled> SELECT </option>
                {props.roles.map((role, index) => <option key={index}> {role} </option>) }
              </Form.Control>
            </Form.Group>

            <Button type='submit'> Save </Button> {' '}
            <Button variant='outline-secondary' onClick={handleClose}> Cancel </Button>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );

}

export default connect(
  state => {
    return { roles: state.users.roles, }
  }, {}
)(AddUser)