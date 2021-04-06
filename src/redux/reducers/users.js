const INITIAL_STATE = {
  usersData: [],
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_USERS': {
      return { ...state, usersData: action.data }
    }
    default: {
      return state;
    }
  }
}

export default userReducer;