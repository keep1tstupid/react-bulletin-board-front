import React, {useEffect, useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import {fetchAllItemTypes} from "../redux/actions";

const AddItem = (props) => {

  const INITIAL_STATE = {
    title: '',
    type: '',
    description: '',
    attachment: '',
    contact: '',
  }

  const [items, setItems] = useState([]);
  const [item, setItem] = useState(INITIAL_STATE);


  const inputChanged = (event) => {
    setItem({...item, [event.target.name]: event.target.value});
  };

  const onEdit = (index, item) => {
    setItems(items.map((i, idx) => index === idx ? item : i))
  };

  const onAdd = (newItem) => {
  }


  return (
    <Container className={'mt-3 pl-0 pr-0'}>
      <Form>
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
            {props.types.map((type) => <option> {type} </option>) }
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
            name='contact'
            value={item.contact}
            onChange={inputChanged}
          />
        </Form.Group>

        {/*<Form.Group>*/}
        {/*  <Form.Check*/}
        {/*    required*/}
        {/*    label='Agree to terms and conditions'*/}
        {/*    feedback='You must agree before submitting.'*/}
        {/*  />*/}
        {/*</Form.Group>*/}

        <Button type='submit'>Send to moderation</Button> {' '}
        <Button variant='outline-secondary'>Cancel</Button>

      </Form>
    </Container>
  )
}



export default connect(
  state => {
    return { types: state.items.types }
  }, {}
)(AddItem);
