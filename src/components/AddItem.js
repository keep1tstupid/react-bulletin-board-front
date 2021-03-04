import React, {useEffect, useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddItem = (props) => {
  const INITIAL_STATE = {
    title: '',
    type: '',
    description: '',
    contact: '',
  }

  const [items, setItems] = useState([]);
  const [item, setItem] = useState(INITIAL_STATE);

  const onDelete = (index) => {
    setItems(items.filter((_, idx) => index !== idx))
  };

  const onEdit = (index, item) => {
    setItems(items.map((i, idx) => index === idx ? item : i))
  };

  const onAdd = (newItem) => {
  }


  return (
    <Container className={'mt-3 pl-0 pr-0'}>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title: </Form.Label>
          <Form.Control type="title" placeholder="Enter title" />
          <Form.Text className="text-muted">
            Keep your title short and descriptive.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="typeSelector">
          <Form.Label>Type: </Form.Label>
          <Form.Control as="select">
            <option>lol</option>
            <option>kek</option>
            <option>pik</option>
            <option>loh</option>
            <option>hoh</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="textArea">
          <Form.Label>Description: </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group>
          <Form.File id="FormControlFile" label="Add file: " />
        </Form.Group>

        <Form.Group controlId="textAreaContact">
          <Form.Label>Contact info: </Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>

        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>

        <Button type="submit">Submit form</Button> {' '}
        <Button variant="outline-secondary">Cancel</Button>

      </Form>
    </Container>
  )
}

export default AddItem;
