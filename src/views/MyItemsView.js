import React from 'react';
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import UserItemList from "../components/ItemLists/UserItemList";

const MyItemsView = () => {
  return (
    <>
      <Header />
      <Container className={'mt-3'}>
        <h3>My items: </h3>
        <UserItemList />
      </Container>
    </>
  )
}

export default MyItemsView;