import React, { useState } from "react";
import { Alert } from 'react-bootstrap';

const AlertMsg = (props) => {
  const [show, setShow] = useState(true);

  return (
    <Alert
      show={show}
      variant={props.variant}
      className={'mt-3'}
      onClose={() => setShow(false)}
      dismissible
    >
      Note: {props.msg} !
    </Alert>
  );
}

export default AlertMsg