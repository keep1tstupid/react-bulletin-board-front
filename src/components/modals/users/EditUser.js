import React, { useState } from 'react';
import {Modal, Form, Button, ModalBody} from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import {editUser} from "../../../redux/users-actions";
import {setNotification} from "../../../redux/notification-actions";


const EditUser = (props) => {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    id: props.userBeingEdited.id,
    username: props.userBeingEdited.username,
    password: props.userBeingEdited.password,
    email: props.userBeingEdited.email,
    role: props.userBeingEdited.role,
  }

  const [user, setUser] = useState(INITIAL_STATE);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUser(user));
    dispatch(setNotification({variant: 'success', msg: 'user information is updated'}));
    handleClose();
  }

  const inputChanged = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      show={show}
      onHide={handleClose}
      onExit={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Edit User</Modal.Title>
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
            <Form.Group controlId='formTitle'>
              <Form.Label>Change password: </Form.Label>
              <Form.Control
                type='text'
                name='password'
                placeholder='New password'
                value={user.password}
                onChange={inputChanged}
              />
            </Form.Group>

            <Button type='submit'> Update </Button> {' '}
            <Button variant='outline-secondary' onClick={handleClose}> Cancel </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default connect(
  (state, ownProps) => {
    return {
      roles: state.users.roles,
      userBeingEdited: state.users.usersData.find((user) => user.id === ownProps.userId),
    }
  }, {}
)(EditUser)