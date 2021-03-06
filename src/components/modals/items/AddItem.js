import React, { useState } from 'react';
import {Modal, Form, Button, Container} from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import { addNewItem } from "../../../redux/items-actions";
import AuthService from "../../../services/auth.service";
import {setNotification} from "../../../redux/notification-actions";


const AddItem = (props) => {
  const currentUser = AuthService.getCurrentUser();

  const INITIAL_STATE = {
    author: currentUser.username,
    title: '',
    type: 'OTHER',
    description: '',
    attachmentFile: '',
    // attachmentId: '',
    contactInfo: '',
    state: 'IN_MODERATION',
  }

  const [item, setItem] = useState(INITIAL_STATE);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const inputChanged = (event) => {
    setItem({...item, [event.target.name]: event.target.value});
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewItem(item));
    dispatch(setNotification({variant: 'success', msg: 'your item is sent for moderation now'}));
    setItem(INITIAL_STATE);
    handleClose();
  }

  const fileAdded = (event) => {
    const file = event.target.files[0];
    // console.log("file is: ", file);
    setItem({...item, attachmentFile: file})
  }

  return (
    <Container className={'mt-3 mb-3 p-0'}>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        show={show}
        onHide={handleClose}
        onExit={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formTitle'>
            <Form.Label>Title: </Form.Label>
            <Form.Control
              type='text'
              name='title'
              placeholder='Enter title'
              value={item.title}
              onChange={inputChanged}
              required
            />
            <Form.Text className='text-muted'>
              Keep your title short and descriptive.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='typeSelector'>
            <Form.Label>Type: </Form.Label>
            <Form.Control
              as='select'
              name='type'
              onChange={inputChanged}
              defaultValue={'SELECT'}
            >
              {/*<option disabled value="" selected hidden> SELECT </option>*/}
              <option disabled> SELECT </option>
              {props.types.map((type, index) => <option key={index}> {type} </option>) }
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='textArea'>
            <Form.Label>Description: </Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='description'
              onChange={inputChanged}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              id='FormControlFile'
              label='Add file: '
              name='attachment'
              onChange={fileAdded}
            />
          </Form.Group>

          <Form.Group controlId='textAreaContact'>
            <Form.Label>Contact info: </Form.Label>
            <Form.Control
              as='textarea'
              rows={2}
              name='contactInfo'
              value={item.contactInfo}
              onChange={inputChanged}
            />
          </Form.Group>

          <Button type='submit'> Send to moderation / Save </Button> {' '}
          <Button variant='outline-secondary' onClick={handleClose}> Cancel </Button>

        </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default connect(
  state => {
    return { types: state.items.types, }
  }, {}
)(AddItem)