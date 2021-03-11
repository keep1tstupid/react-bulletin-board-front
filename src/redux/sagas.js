import { call, put, takeEvery } from 'redux-saga/effects';
import http from "../http-common";
import { addFetchedItems, addFetchedItemTypes, fetchAllItems as fetchAllItemsAction } from './actions';

// saga for all items
function* fetchAllItems() {
    try {
      const result = yield call(http.get, '/items');
      yield put(addFetchedItems(result.data));
    } catch (err) {
      // Handle error
      // yield put(showErrorPopup('SNAP!'));
      console.error(err);
    }
}

// saga for all item types
function* fetchAllItemTypes() {
  try {
    const result = yield call(http.get, '/types');
    yield put(addFetchedItemTypes(result.data));
  } catch (err) {
    // Handle error
    // yield put(showErrorPopup('SNAP!'));
    console.error(err);
  }
}

// saga to add new item
function* addNewItem(action) {
  try {
    yield call(http.post, "/items", action.data);
    yield put(fetchAllItemsAction());
  } catch (err) {
    // Handle error
    // yield put(showErrorPopup('SNAP!'));
    console.error(err);
  }
}


export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_ITEMS', fetchAllItems);
  yield takeEvery('FETCH_ALL_ITEM_TYPES', fetchAllItemTypes);
  yield takeEvery('ADD_NEW_ITEM', addNewItem);
}
