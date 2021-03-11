
const INITIAL_STATE = {
  itemData: [],
  types: [],
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_ITEMS': {
      return { ...state, itemData: action.data };
    }
    // ADD_FETCHED_TYPES
    case 'ADD_FETCHED_ITEM_TYPES': {
      return { ...state, types: action.data }
    }
    // ADD_NEW_ITEM  { ...state, itemData: [newItem, ...state.itemData] }
    default: {
      return state;
    }
  }
}

export default itemReducer;

// https://github.com/reduxjs/reselect - to filter data by type and state
