import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { editItem } from "../../redux/actions";


const ApproveItem = (props) => {
  // console.log(props);
  const item = ({...props.itemBeingApproved, state: 'APPROVED'});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reload = () => window.location.reload();

  const dispatch = useDispatch();
  const handleApprove = () => {
    // console.log("APPROVED ITEM: ", item);
    dispatch(editItem(item));
    handleClose();
    reload();
  }

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Approve
      </Button>

      <Modal
        show={show}
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Header>
          <Modal.Title>You are going to publish:</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <p>Item: {props.itemBeingApproved.title} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleApprove}>
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
      itemBeingApproved: state.items.itemData.find((item) => item.id === ownProps.itemId)
    }
  }, {}
)(ApproveItem);
