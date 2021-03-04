import React from 'react';

const Item = (props) => {

  return (
    <tr key={props.id}>
        <td> {props.title} </td>
        <td> {props.type} </td>
        <td> {props.description} </td>
    </tr>
  )
}

export default Item;
