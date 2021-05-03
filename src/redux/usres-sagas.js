import { call, put, takeEvery } from 'redux-saga/effects';
import http from "../http-common";
import {addFetchedUsers} from "./users-actions";
import {setNotification} from "./notification-actions";
import {fetchAllUsers as fetchAllUsersAction} from "./users-actions";
import {addFile} from "./items-actions";

function* fetchAllUsers() {
  try {
    const users = yield call(http.get, '/api/users');
    const roles = yield call(http.get, '/api/roles');
    //const result = users.data;
    // console.log(result);
    const result = {
      users: users.data,
      roles: roles.data,
    }
    yield put(addFetchedUsers(result));
  } catch (err) {
    console.error(err);
  }
}

function* addNewUser(action) {
  try {
    yield call(http.post, "/api/users", action.data);
    yield put(setNotification({variant: 'success', msg: 'user is added'}))
    yield put(fetchAllUsersAction());
  } catch (err) {
    console.error(err);
  }
}

function* informUser(action) {}

function* editUser(action) {
  // console.log("data in saga: ", action);
  try {
    const url = "/api/users/" + action.data.id;
    const response = yield call(http.put, url, action.data);
    console.log("response on editing user:", response);
    // inform user here if everything is fine
    yield put(fetchAllUsersAction());
  } catch (err) {
    console.error(err);
  }
}

export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_USERS', fetchAllUsers);
  yield takeEvery('ADD_NEW_USER', addNewUser);
  yield takeEvery('EDIT_USER', editUser);
}