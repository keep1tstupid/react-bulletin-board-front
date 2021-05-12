import { call, put, takeEvery } from 'redux-saga/effects';
import http from "../http-common";
import {addFetchedUsers} from "./users-actions";
import {setNotification} from "./notification-actions";
import {fetchAllUsers as fetchAllUsersAction, informUser as informUserAction} from "./users-actions";


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
    yield put(informUserAction({ userData: action.data, eventType: 'newUser' }));
    yield put(fetchAllUsersAction());
  } catch (err) {
    console.error(err);
  }
}

function* informUser(action) {
  try {
    const url = "/api/send-email/" + action.data.eventType;
    yield call(http.post, url, action.data.userData);
  } catch (err) {
    console.error(err);
  }
}

function* editUser(action) {
  // console.log("data in saga: ", action);
  try {
    const url = "/api/users/" + action.data.id;
    const response = yield call(http.put, url, action.data);
    console.log("response on editing user:", response);
    // inform user here
    yield put(informUserAction({ userData: action.data, eventType: 'updUser' }));
    yield put(fetchAllUsersAction());
  } catch (err) {
    console.error(err);
  }
}

function* deleteUser(action) {
  try {
    const url = "/api/users/" + action.data.id;
    yield call(http.delete, url, action.data);
    yield put(informUserAction({ userData: action.data, eventType: 'delUser' }));
    yield put(fetchAllUsersAction());
  } catch (err) {
    console.log(err);
  }
}

export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_USERS', fetchAllUsers);
  yield takeEvery('ADD_NEW_USER', addNewUser);
  yield takeEvery('EDIT_USER', editUser);
  yield takeEvery('DEL_USER', deleteUser);
  yield takeEvery('INFORM_USER', informUser);
}