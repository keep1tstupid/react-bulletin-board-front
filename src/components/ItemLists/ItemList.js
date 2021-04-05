import React from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'react-bootstrap';
import { getItemsForUsersList } from '../../redux/selectors'
import Item from "../Item";
import AuthService from "../../services/auth.service";


const ItemList = (props) => {
  const items = props.items || [];
  return (
    <div>
      <Container className={'mt-3 pl-0 pr-0'}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th width='20%'>Title</th>
              <th width='20%'>Type</th>
              <th width='40%'>Description</th>
              <th width='20%'></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => <Item {...item} key={item.id}/>)}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default connect(
  (state, ownProps) => {
    const currentUser = AuthService.getCurrentUser();
    const currentLocation = window.location.pathname;

    // console.log(ownProps.type);
    // console.log(state);
    if (ownProps.type) {
      return {
        items: getItemsForUsersList(state)(ownProps.type)
      }
    } else if (currentLocation === '/moderation') {
      return {
        items: state.items.itemData.filter(item => item.state === 'IN_MODERATION')
      }
    } else if (currentLocation === '/my-items') {
        return {
          items: state.items.itemData.filter(item => item.author === currentUser)
        }
    }
  }, {}
)(ItemList);