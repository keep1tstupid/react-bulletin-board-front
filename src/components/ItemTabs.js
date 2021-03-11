import React, {useEffect} from 'react';
import { Container, Tabs, Tab, } from 'react-bootstrap';
import ItemList from "./ItemList";
import {useDispatch} from "react-redux";
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
          <ItemList/>
        </Tab>
        <Tab eventKey="ads" title="Ads">
          <ItemList/>
        </Tab>
        <Tab eventKey="complaints" title="Complaints">
          <ItemList/>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default ItemTabs;
