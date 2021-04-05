import React, {useEffect} from 'react';
import Header from "../../components/Header";
import ItemList from "../../components/ItemLists/ItemList";
import {Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import { fetchAllItems } from "../../redux/actions";

const ModerateItemView = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch])

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
