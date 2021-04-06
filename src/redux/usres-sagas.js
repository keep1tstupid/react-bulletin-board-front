import { call, put, takeEvery } from 'redux-saga/effects';
import http from "../http-common";
import {addFetchedUsers} from "./users-actions";

function* fetchAllUsers() {
  try {
    const users = yield call(http.get, '/api/users');
    const result = users.data;
    console.log(result);
    yield put(addFetchedUsers(result));
  } catch (err) {
    console.error(err);
  }
}

export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_USERS', fetchAllUsers);
}