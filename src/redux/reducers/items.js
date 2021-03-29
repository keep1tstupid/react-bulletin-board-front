
const INITIAL_STATE = {
  itemData: [],
  types: [],
  attachment: [],
  allAttachments: [],
  // typeFilter: 'SHOW_ALL',
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_ITEMS': {
      return { ...state,
        itemData: action.data.items,
        types: action.data.types,
        allAttachments: action.data.files
      };
    }
    // case 'ADD_FETCHED_ITEM_TYPES': {
    //   return { ...state, types: action.data };
    // }
    case 'ADD_FILE': {
      return { ...state, attachment: action.data }
    }
    // case 'GET_ALL_FILES': {
    //   return { ...state, attachments: action.data }
    // }
    // case 'ADD_ALL_FILES': {
    //   return { ...state, allAttachments: action.data }
    // }
    // case 'SET_TYPE_FILTER': {
    //   return { ...state, typeFilter: action.data }
    // }
    default: {
      return state;
    }
  }
}

export default itemReducer;

// https://github.com/reduxjs/reselect - to filter data by type and state
