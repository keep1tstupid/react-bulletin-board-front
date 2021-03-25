import React from 'react';
import { Container } from 'react-bootstrap';
import Header from "../components/Header";
import ItemTabs from "../components/ItemTabs";
import AddItem from "../components/modals/AddItem";

const HomeView = () => {
  return (
    <>
      <Header />
      <Container className={'mt-3'}>
        <AddItem />
      </Container>
      <ItemTabs />
    </>
  );
}

export default HomeView;
