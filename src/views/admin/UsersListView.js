// available only for adm
import React, {useEffect} from 'react';
import Header from "../../components/Header";
import {Container} from "react-bootstrap";
import UserList from "../../components/UserList";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../../redux/users-actions";


const UsersListView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container className={'mt-3'}>
        <h3>Users: </h3>
      </Container>
      <UserList />
    </>
  )
}

export default UsersListView