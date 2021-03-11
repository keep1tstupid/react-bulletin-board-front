import React from 'react';
import { Button } from 'react-bootstrap';


const Item = (props) => {

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  return (
    <>
      <tr>
        <td>
          <a href={`/items/${props.id}`} >{props.title}</a>
        </td>
        <td>{props.type}</td>
        <td>{props.description}</td>
        <td>
          <Button
            variant='secondary'
            onClick={handleEdit}>
            Edit
          </Button>
          {' '}
          <Button
            variant='danger'
            onClick={handleDelete}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  )
}

export default Item;
