import React, { useState } from 'react';
import {Modal, Button, ModalFooter, Form} from 'react-bootstrap';
import { connect } from "react-redux";

const ViewItem = (props) => {

  const getFileAttributes = (attachmentId) => {
    const file = props.attachments.find((file) => file.id === attachmentId)
    const path = file ? `${file.url}/${file.name}`: null;
    const name = file ? file.name : null;
    const exist = Boolean(file);

    return {
      name,
      path,
      exist,
    }
  }

  const item = props.itemBeingViewed;
  const fileAttributes = getFileAttributes(item.attachmentId);

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
          { fileAttributes.exist &&
          (<>
            <p>Attached file: {fileAttributes.name}</p>
            {/*<img src={fileAttributes.path} alt="attachment"/>*/}
          </>)
          }
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
      itemBeingViewed: state.items.itemData.find((item) => item.id === ownProps.itemId),
      attachments: state.items.allAttachments,
    }
  }, {}
)(ViewItem)