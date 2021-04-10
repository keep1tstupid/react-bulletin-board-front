import React, { useState } from 'react';
import {Modal, Button, ModalFooter} from 'react-bootstrap';
import { connect } from "react-redux";

const ViewItem = (props) => {
  const item = props.itemBeingViewed;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
        View
      </Button>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        show={show}
        onHide={handleClose}
        onExit={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Item details: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Title: {item.title} </p>
          <p> Description: {item.description} </p>
          <p> Contact information: {item.contactInfo} </p>
        </Modal.Body>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default connect(
  (state, ownProps) => {
    return {
      itemBeingViewed: state.items.itemData.find((item) => item.id === ownProps.itemId)
    }
  }, {}
)(ViewItem)