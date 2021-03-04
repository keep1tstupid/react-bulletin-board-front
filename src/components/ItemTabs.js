import React from 'react';
import { Container, Tabs, Tab, } from 'react-bootstrap';
import ItemList from "./ItemList";

const ItemTabs = (props) => {

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

// https://react-bootstrap.github.io/components/tabs/

export default ItemTabs;
