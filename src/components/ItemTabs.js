import React, {useEffect} from 'react';
import { Container, Tabs, Tab, } from 'react-bootstrap';
import ItemList from "./ItemList";
import {connect, useDispatch} from "react-redux";
import {fetchAllItems} from "../redux/actions";

const ItemTabs = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch])

  return (
    <Container className={'mt-3 pl-0 pr-0'}>
      <Tabs defaultActiveKey="all" id="tabs">
        <Tab eventKey="all" title="All items">
          <ItemList type='SHOW_ALL'/>
        </Tab>
        <Tab eventKey="ads" title="Ads">
          <ItemList type='ADVERTISEMENT' />
        </Tab>
        <Tab eventKey="complaints" title="Complaints">
          <ItemList type='COMPLAINT'/>
        </Tab>
        <Tab eventKey="other" title="Other">
          <ItemList type='OTHER'/>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default ItemTabs;


// export default connect(
//   state => {
//     return { items: state.items.itemData }
//   }, {}
// )(ItemTabs);