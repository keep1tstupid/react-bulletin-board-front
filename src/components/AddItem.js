import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import { addNewItem } from "../redux/actions";
import AuthService from "../services/auth.service";


const AddItem = (props) => {

  //console.log(props);
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser);

  const INITIAL_STATE = {
    author: currentUser.username,
    title: '',
    type: 'ADVERTISEMENT',
    description: '',
    attachment: '',
    contactInfo: '',
    state: 'IN_MODERATION',
  }

  const [item, setItem] = useState(INITIAL_STATE);

  const inputChanged = (event) => {
    setItem({...item, [event.target.name]: event.target.value});
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewItem(item));
    setItem(INITIAL_STATE);
    props.history.push('/home');
  }

  return (
    <Container className={'mt-3 pl-0 pr-0'}>
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
        <Button variant='outline-secondary'> Cancel </Button>

      </Form>
    </Container>
  )
}


export default connect(
  state => {
    return { types: state.items.types, }
  }, {}
)(AddItem);
