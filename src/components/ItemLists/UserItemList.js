import React from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'react-bootstrap';
import Item from "../Item";
import AuthService from "../../services/auth.service";

const UserItemList = (props) => {
  const items =  props.items || [];
  // console.log(items);

  return (
    <div>
      <Container className={'mt-3 pl-0 pr-0'}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th width='20%'>Title</th>
              <th width='20%'>Type</th>
              <th width='20%'>Description</th>
              <th width='20%'>State</th>
              <th width='20%'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => <Item {...item} key={item.id} view='userList'/>)}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default connect(
  state => {
    const currentUser = AuthService.getCurrentUser().username;
    // console.log(currentUser);
    return { items: state.items.itemData.filter(item => item.author === currentUser) }
  }, {}
)(UserItemList)