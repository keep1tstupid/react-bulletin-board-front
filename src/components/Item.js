import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import AuthService from "../services/auth.service";
import { deleteItem } from "../redux/actions";
import {useDispatch} from "react-redux";
import EditItem from "./modals/EditItem";
import ApproveItem from "./modals/ApproveItem";


const Item = (props) => {
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    const currentLocation = window.location.pathname;
    // console.log('USER', currentUser);
    // console.log('LOCATION', currentLocation);

    if (currentUser.roles.includes("ROLE_ADMIN") ||
        currentUser.roles.includes("ROLE_MODERATOR" ||
        currentUser.username === props.author)) {
      setButtonsVisible(true);
    }
    if ((currentUser.roles.includes("ROLE_ADMIN") ||
      currentUser.roles.includes("ROLE_MODERATOR")) &&
      currentLocation === '/moderation') {
      setApprovalAvailable(true);
    }
  }, [props])

  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [approvalAvailable, setApprovalAvailable] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(props));
  }

  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.type}</td>
        <td>{props.description}</td>
        <td>
          {buttonsVisible && (
            <>
              <EditItem itemId={props.id}/>
              {' '}
              <Button
              variant='outline-danger'
              onClick={handleDelete}>
              Del
              </Button>
              {' '}
            </>
          )}
          {approvalAvailable && (
            <ApproveItem itemId={props.id}/>
          )}

        </td>
      </tr>
    </>
  )
}

export default Item;