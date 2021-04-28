const INITIAL_STATE = {
  usersData: [],
  roles: [],
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_USERS': {
      return { ...state,
        usersData: action.data.users,
        roles: action.data.roles,
      }
    }
    default: {
      return state;
    }
  }
}

export default userReducer;