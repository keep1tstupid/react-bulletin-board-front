import React from 'react';
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import {Container} from "react-bootstrap";

const ModerateItemView = () => {
  return (
    <>
      <Header />
      <Container className={'mt-3'}>
        <h3>Items to review: </h3>
      </Container>
      <ItemList />
    </>
  );
}

export default ModerateItemView;
