import React from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'react-bootstrap';
import { getProperTypeItems, getProperStateItems } from '../redux/selectors'
import Item from "./Item";
import { setTypeFilter } from "../redux/actions";


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
    //return { items: state.items.itemData }
    console.log(ownProps.type);
    //console.log(state);
    // setTypeFilter(ownProps.type);
    return {
      items: getProperTypeItems(state)(ownProps.type)
    }
  }, {}
)(ItemList);

// export default ItemList