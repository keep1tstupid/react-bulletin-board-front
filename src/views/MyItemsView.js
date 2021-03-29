import React from 'react';
import Header from "../components/Header";
import {Container} from "react-bootstrap";

const MyItemsView = () => {
  return (
    <>
      <Header />
      <Container className={'mt-3'}>
        <p> No items yet </p>
      </Container>
    </>
  )
}

export default MyItemsView;