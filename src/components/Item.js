import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import AuthService from "../services/auth.service";


const Item = (props) => {
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser.roles.includes("ROLE_ADMIN") ||
      currentUser.roles.includes("ROLE_MODERATOR") ||
      currentUser.username === props.author) {
      setButtonsVisible(true);
    }
  }, [props])

  const [buttonsVisible, setButtonsVisible] = useState(false);

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
          {buttonsVisible && (
            <>
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
            </>
          )}

        </td>
      </tr>
    </>
  )
}

export default Item;
