import React from 'react';
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import ItemList from "../components/ItemList";

const MyItemsView = () => {
  return (
    <>
      <Header />
      <Container className={'mt-3'}>
        <ItemList />
      </Container>
    </>
  )
}

export default MyItemsView;