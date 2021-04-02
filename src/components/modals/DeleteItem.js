import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import {connect} from "react-redux";

// todo: add new state for deleted item in ItemState enum

const DeleteItem = (props) => {
  console.log(props);
  const item = ({...props.itemBeingDeleted, state: 'DELETED'});

}

export default connect(
  (state, ownProps) => {
    return {
      itemBeingDeleted: state.items.itemData.find((item) => item.id === ownProps.itemId)
    }
  }, {}
)(DeleteItem);