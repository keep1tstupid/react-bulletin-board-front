import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from "../../components/Header";
import ItemTabs from "../../components/ItemTabs";
import AddItem from "../../components/modals/items/AddItem";
import { connect, useDispatch } from "react-redux";
import { fetchAllItems } from "../../redux/items-actions";
import { getNotification } from "../../redux/notification-actions";
import AlertMsg from "../../components/AlertMsg";

const HomeView = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(getNotification());
  }, [dispatch])

  const showAlert = props.notification;
  // console.log(showAlert);

  return (
    <>
      <Header />
      <Container>
        { showAlert ? (
            <AlertMsg
              variant={props.notification.variant}
              msg={props.notification.msg}
            />
        ) : null }
        <AddItem />
        <ItemTabs />
      </Container>
    </>
  )
}

export default connect(
  state => {
    return { notification: state.notification }
  }, {}
)(HomeView)
