const INITIAL_STATE = null;

// {variant: "", msg: ""}

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION': {
      return { ...state,
      variant: action.data.variant,
      msg: action.data.msg
      }
    }
    case 'GET_NOTIFICATION': {
      return state;
    }
    case 'CLEAR_NOTIFICATION': {
      state = INITIAL_STATE;
      return state;
    }
    default: {
      return state;
    }
  }
}

export default itemReducer;