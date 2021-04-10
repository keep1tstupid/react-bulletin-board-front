import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { deleteItem } from "../../redux/items-actions";
import { setNotification } from "../../redux/notification-actions";


const DeleteItem = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(props.itemBeingDeleted));
    dispatch(setNotification({variant: 'success', msg: 'item is deleted'}))
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
          <Modal.Title>You are going to delete:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Item: {props.itemBeingDeleted.title} </p>
        </Modal.Body>
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
      itemBeingDeleted: state.items.itemData.find((item) => item.id === ownProps.itemId)
    }
  }, {}
)(DeleteItem);