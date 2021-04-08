import React, {useEffect} from 'react';
import Header from "../../components/Header";
import ItemList from "../../components/ItemLists/ItemList";
import {Container} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import { fetchAllItems } from "../../redux/items-actions";
import Paginator from "../../components/Paginator";
import { getNotification } from "../../redux/notification-actions";
import AlertMsg from "../../components/AlertMsg";

// todo : add safe deleting for moderator (permanent deleting should be for adm only)
// todo : remove editing for moderator (should be decline or something)
// todo : approve and decline in view modal?
// todo : add alerts for actions on the page
// todo : pagination

const ModerateItemView = (props) => {
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
        <Container>
          <Container className={'mt-3'}>
            <h3>Items to review: </h3>
          </Container>
          <ItemList />
          <Paginator />
        </Container>
      </Container>
    </>
  );
}

export default connect(
  state => {
    return { notification: state.notification }
  }, {}
)(ModerateItemView)
