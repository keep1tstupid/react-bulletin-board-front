import React, { useState } from 'react';
import {Modal, Form, Button, ModalBody} from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";


const EditUser = (props) => {
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
  const handleSubmit = (event) => {}

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

            <Button type='submit'> Send to moderation / Update </Button> {' '}
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