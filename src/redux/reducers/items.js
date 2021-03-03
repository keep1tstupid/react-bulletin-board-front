import store from '../store';
import { getAll } from "../../services/item.service";
import {addFetchedItems} from "../actions";

const INITIAL_STATE = {
  itemData: []
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL_ITEMS': {
      getAll()
        .then(result => {
          store.dispatch(addFetchedItems(result.data));
        })
        .catch(err => console.error(err))
      return state;
    }
    case 'ADD_FETCHED_ITEMS': {
      return { itemData: action.data };
    }
    default: {
      return state;
    }
  }
}

export default itemReducer;
