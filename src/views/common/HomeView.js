import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Header from "../../components/Header";
import ItemTabs from "../../components/ItemTabs";
import AddItem from "../../components/modals/AddItem";
import {useDispatch} from "react-redux";
import { fetchAllItems } from "../../redux/actions";

const HomeView = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch])

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
