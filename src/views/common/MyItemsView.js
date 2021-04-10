import React, { useEffect } from 'react';
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import UserItemList from "../../components/ItemLists/UserItemList";
import { connect, useDispatch } from "react-redux";
import { fetchAllItems } from "../../redux/items-actions";
import { getNotification } from "../../redux/notification-actions";
import AlertMsg from "../../components/AlertMsg";

const MyItemsView = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(getNotification());
  }, [dispatch])

  const showAlert = props.notification;
  console.log(showAlert);

  return (
    <>
      <Header />
      <Container>
        {showAlert && (
          <AlertMsg
            variant={props.notification.variant}
            msg={props.notification.msg}
          />
        )}
        <Container className={'mt-3'}>
          <h3>My items: </h3>
          <UserItemList />
        </Container>
      </Container>

    </>
  )
}

export default connect(
  state => {
    return { notification: state.notification }
  }, {}
)(MyItemsView)