
const INITIAL_STATE = {
  itemData: [],
  types: [],
  attachment: [],
  allAttachments: [],
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
    case 'ADD_FILE': {
      return { ...state, attachment: action.data }
    }
    default: {
      return state;
    }
  }
}

export default itemReducer;