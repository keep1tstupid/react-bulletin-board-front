import React, {useEffect, useState} from 'react';
import AuthService from "../services/auth.service";
import EditItem from "./modals/items/EditItem";
import ApproveItem from "./modals/items/ApproveItem";
import ViewItem from "./modals/items/ViewItem";
import DeleteItem from "./modals/items/DeleteItem";
import DeclineItem from "./modals/items/DeclineItem";


const Item = (props) => {
  const [editAvailable, setEditAvailable] = useState(false);
  const [delAvailable, setDelAvailable] = useState(false);
  const [approvalAvailable, setApprovalAvailable] = useState(false);
  const [declineAvailable, setDeclineAvailable] = useState(false);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    const currentLocation = window.location.pathname;
    // console.log('LOCATION', currentLocation);

    if (currentLocation === '/my-items') {
      setEditAvailable(true);
      setDelAvailable(true);

    }
    if ((currentUser.roles.includes("ROLE_ADMIN") ||
      currentUser.roles.includes("ROLE_MODERATOR")) &&
      currentLocation === '/moderation') {
      setApprovalAvailable(true);
      setDeclineAvailable(true);
    }
  }, [props])

  const truncate = (text) => {
    return text.length > 30 ? text.substring(0, 27) + "..." : text;
  }

  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.type}</td>
        <td>{truncate(props.description)}</td>
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
            <>
              <ApproveItem itemId={props.id}/>
              {' '}
            </>
          )}
          {declineAvailable && (
            <DeclineItem itemId={props.id}/>
          )}
        </td>
      </tr>
    </>
  )
}

export default Item;