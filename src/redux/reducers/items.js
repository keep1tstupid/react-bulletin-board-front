
const INITIAL_STATE = {
  itemData: [],
  types: [],
  attachments: [],
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_ITEMS': {
      return { ...state, itemData: action.data };
    }
    case 'ADD_FETCHED_ITEM_TYPES': {
      return { ...state, types: action.data };
    }
    case 'ADD_FILE': {
      return { ...state, attachments: action.data}
    }
    default: {
      return state;
    }
  }
}

export default itemReducer;

// https://github.com/reduxjs/reselect - to filter data by type and state
