import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import AuthService from "../services/auth.service";
import { deleteItem } from "../redux/items-actions";
import {useDispatch} from "react-redux";
import EditItem from "./modals/EditItem";
import ApproveItem from "./modals/ApproveItem";
import ViewItem from "./modals/ViewItem";
import DeleteItem from "./modals/DeleteItem";


const Item = (props) => {
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    const currentLocation = window.location.pathname;
    // console.log('LOCATION', currentLocation);
    // currentUser.roles.includes("ROLE_ADMIN") ||
    // currentUser.roles.includes("ROLE_MODERATOR") ||

    if (currentLocation === '/my-items') {
      setEditAvailable(true);
      setDelAvailable(true);

    }
    if ((currentUser.roles.includes("ROLE_ADMIN") ||
      currentUser.roles.includes("ROLE_MODERATOR")) &&
      currentLocation === '/moderation') {
      setApprovalAvailable(true);
      setDelAvailable(true);
    }
  }, [props])

  const [editAvailable, setEditAvailable] = useState(false);
  const [delAvailable, setDelAvailable] = useState(false);
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
        {props.view === 'userList' && (
          <td>
            <p>{props.state}</p>
          </td>
        )}
        <td>
          <ViewItem itemId={props.id}/>
          {' '}
          {editAvailable && (
            <>
              <EditItem itemId={props.id}/>
              {' '}
            </>
          )}
          {delAvailable && (
            <>
              <DeleteItem itemId={props.id}/>
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