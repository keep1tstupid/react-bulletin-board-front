import { call, put, takeEvery } from 'redux-saga/effects';
import http from "../http-common";
import { addFetchedItems, addFile, fetchAllItems as fetchAllItemsAction } from './items-actions';
import {setNotification} from "./notification-actions";

// saga for all items, types and attachments
function* fetchAllItems() {
    try {
      const items = yield call(http.get, '/api/items');
      const files = yield call(http.get, '/api/files');
      const types = yield call(http.get, '/api/types');
      const result  = {
        items: items.data,
        files: files.data,
        types: types.data,
      }
      yield put(addFetchedItems(result));
    } catch (err) {
      console.error(err);
    }
}

function* uploadFile(action) {
  console.log("I tried to add: ", action.data.file, " for ", action.data.id);
  try {
    const data = new FormData();
    data.append("file", action.data.file);
    data.append("id", action.data.id);

    yield call(http.post, "/api/upload", data)
    // console.log("I tried to add: ", data);
  } catch (err) {
    console.error(err);
    yield put(setNotification({
      variant: 'warning',
      msg: 'your item is sent for moderation now without attachment!',
    }))
  }
}

function* addNewItem(action) {
  //console.log("action file = ", action.data.attachmentFile);
  try {
    const response = yield call(http.post, "/api/items", action.data);
    yield put(setNotification({variant: 'success', msg: 'your item is sent for moderation now'}))
    //console.log("response = ", response);
    //console.log("action = ", action);
    if (action.data.attachmentFile !== '') {
      console.log("response.data.id = ", response.data.id);
      yield put(addFile({
        file: action.data.attachmentFile,
        id: response.data.id,
      }));
    }
    yield put(fetchAllItemsAction());
  } catch (err) {
    console.error(err);

  }
}

function* deleteItem(action) {
  try {
    const url = "/api/items/" + action.data.id;
    yield call(http.delete, url, action.data);
    yield put(fetchAllItemsAction());
  } catch (err) {
    console.error(err);
  }
}

function* editItem(action) {
  try {
    const url = "/api/items/" + action.data.id;
    const response = yield call(http.put, url, action.data)
    //yield put(setNotification({variant: 'success', msg: 'your item is sent for moderation now'}))
    if (action.data.attachmentFile) {
      console.log("response.data.id = ", response.data.id,
        "action.data.attachmentFile = ", action.data.attachmentFile);
      yield put(addFile({
        file: action.data.attachmentFile,
        id: response.data.id,
      }));
    }
    yield put(fetchAllItemsAction());
  } catch (err) {
    console.error(err);
  }
}

export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_ITEMS', fetchAllItems);
  yield takeEvery('ADD_NEW_ITEM', addNewItem);
  yield takeEvery('DELETE_ITEM', deleteItem);
  yield takeEvery('EDIT_ITEM', editItem);
  yield takeEvery('ADD_FILE', uploadFile);
}
