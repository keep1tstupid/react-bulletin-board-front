import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import { addNewItem, addFile } from "../../redux/actions";
import AuthService from "../../services/auth.service";

//todo: add image preview or at least title

const AddItem = (props) => {

  //console.log(props);
  const currentUser = AuthService.getCurrentUser();
  const [show, setShow] = useState(false);
  //console.log(currentUser);

  const INITIAL_STATE = {
    author: currentUser.username,
    title: '',
    type: '',
    description: '',
    attachmentFile: '',
    attachmentId: '',
    contactInfo: '',
    state: 'IN_MODERATION',
  }

  const [item, setItem] = useState(INITIAL_STATE);

  const reload = () => window.location.reload();

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    reload();
    setItem(INITIAL_STATE);
  }

  const inputChanged = (event) => {
    setItem({...item, [event.target.name]: event.target.value});
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log(item);
    event.preventDefault();
//    dispatch(addFile(item.attachment));
    dispatch(addNewItem(item));
    //setItem(INITIAL_STATE);
    //handleClose();
  }


  const fileAdded = (event) => {
    //console.log("file added! ", event);
    const file = event.target.files[0];
      // headers: {"Content-Type": "multipart/form-data"},}
    console.log("file is: ", file);
    setItem({...item, attachmentFile: file})
    //dispatch(addFile(file));
  }

  return (
    <>
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
        <Modal.Title>Add New Item YaY</Modal.Title>
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
          >
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
    </>
  )
}

export default connect(
  state => {
    return { types: state.items.types, }
  }, {}
)(AddItem);
