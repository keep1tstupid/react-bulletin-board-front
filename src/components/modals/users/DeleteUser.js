import React, { useState } from 'react';
import {Modal, Form, Button, ModalBody} from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import {setNotification} from "../../../redux/notification-actions";

const DeleteUser = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Del
      </Button>

      <Modal></Modal>
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