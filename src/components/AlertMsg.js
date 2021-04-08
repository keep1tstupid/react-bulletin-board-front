import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { clearNotification } from "../redux/notification-actions";

const AlertMsg = (props) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const closeNotification = () => {
    dispatch(clearNotification());
    setShow(false);
  }

  return (
    <Alert
      show={show}
      variant={props.variant}
      className={'mt-3'}
      onClose={closeNotification}
      dismissible
    >
      Note: {props.msg} !
    </Alert>
  );
}

export default AlertMsg