import React from 'react';
import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { fetchAllItems } from "../redux/actions";


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
      {items.map(item => {
        return (
          <p key={item.id}>{item.title}</p>
        )
      })}
    </div>
  )
}

export default connect(
  state => {
    return { items: state.items.itemData }
  },
  { fetchAllItems }
)(ItemList);

