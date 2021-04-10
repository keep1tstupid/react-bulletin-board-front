import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { editItem } from "../../redux/items-actions";
import { setNotification } from "../../redux/notification-actions";


const DeclineItem = (props) => {
  const item = ({...props.itemBeingDeclined, state: 'DECLINED'});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleDecline = () => {
    dispatch(editItem(item));
    dispatch(setNotification({variant: 'info', msg: 'item is declined'}))
    handleClose();
  }

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Decline
      </Button>

      <Modal
        show={show}
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Header>
          <Modal.Title>You are going to decline:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Item: {props.itemBeingDeclined.title} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDecline}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default connect(
  (state, ownProps) => {
    return {
      itemBeingDeclined: state.items.itemData.find((item) => item.id === ownProps.itemId)
    }
  }, {}
)(DeclineItem);
