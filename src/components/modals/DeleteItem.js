import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import {connect} from "react-redux";


const DeleteItem = (props) => {
  console.log(props);
  const item = ({...props.itemBeingDeleted, state: 'APPROVED'});

}

export default connect(
  (state, ownProps) => {
    return {
      itemBeingDeleted: state.items.itemData.find((item) => item.id === ownProps.itemId)
    }
  }, {}
)(DeleteItem);