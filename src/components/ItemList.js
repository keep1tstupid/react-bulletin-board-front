import React from 'react';
import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { fetchAllItems } from "../redux/actions";
import { Table, Container, } from 'react-bootstrap';


const ItemList = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (props.items.length === 0) {
      dispatch(fetchAllItems());
    }
  }, [dispatch])

  const items = props.items || [];
  return (
    <div>
      <Container className={'mt-3 pl-0 pr-0'}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th width='30%'>Title</th>
              <th width='20%'>Type</th>
              <th width='50%'>Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default connect(
  state => {
    return { items: state.items.itemData }
  },
  { fetchAllItems }
)(ItemList);

