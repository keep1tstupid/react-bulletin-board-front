
const INITIAL_STATE = {
  itemData: [],
  types: [],
  attachments: [],
  stateFilter: 'SHOW_ALL',
  typeFilter: 'SHOW_ALL',
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
    case 'SET_STATE_FILTER': {
      return { ...state, stateFilter: action.data}
    }
    case 'SET_TYPE_FILTER': {
      return { ...state, typeFilter: action.data}
    }
    default: {
      return state;
    }
  }
}

export default itemReducer;

// https://github.com/reduxjs/reselect - to filter data by type and state
