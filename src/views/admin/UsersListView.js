// available only for adm
import React, {useEffect} from 'react';
import Header from "../../components/Header";
import {Container} from "react-bootstrap";
import UserList from "../../components/UserList";
import {connect, useDispatch} from "react-redux";
import { fetchAllUsers } from "../../redux/users-actions";
import AlertMsg from "../../components/AlertMsg";
import {getNotification} from "../../redux/notification-actions";
import AddUser from "../../components/modals/AddUser";


const UsersListView = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(getNotification());
  }, [dispatch]);

  const showAlert = props.notification;

  return (
    <>
      <Header />
      <Container className={'mt-3'}>
        {showAlert && (
          <AlertMsg
            variant={props.notification.variant}
            msg={props.notification.msg}
          />
        )}
        <AddUser />
        <h4>Users: </h4>
        <UserList />
      </Container>
    </>
  )
}

export default connect(
  state => {
    return { notification: state.notification }
  }, {}
)(UsersListView)