import { call, put, takeEvery } from 'redux-saga/effects';
import http from "../http-common";
import { addFetchedItems, addFetchedItemTypes } from './actions';

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


export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_ITEMS', fetchAllItems);
  yield takeEvery('FETCH_ALL_ITEM_TYPES', fetchAllItemTypes);
}
