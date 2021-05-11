import React, { useState } from 'react';
import {Modal, Form, Button, ModalBody} from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import {setNotification} from "../../../redux/notification-actions";
import {delUser} from "../../../redux/users-actions";

const DeleteUser = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(delUser(props.userBeingDeleted));
    dispatch(setNotification({variant: 'success', msg: 'user is deleted'}));
    handleClose();
  }

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Del
      </Button>

      <Modal
        show={show}
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Header>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <h4> You are going to delete user: {props.userBeingDeleted.username}</h4>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect(
  (state, ownProps) => {
    return {
      userBeingDeleted: state.users.usersData.find((user) => user.id === ownProps.userId),
    }
  }, {}
)(DeleteUser)