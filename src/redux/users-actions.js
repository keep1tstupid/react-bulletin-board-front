
export const fetchAllUsers = () => ({
  type: 'FETCH_ALL_USERS',
  data: null,
})

export const addFetchedUsers = (data) => ({
  type: 'ADD_FETCHED_USERS',
  data: data,
})

export const addNewUser = (data) => ({
  type: 'ADD_NEW_USER',
  data: data,
})

export const editUser = (data) => ({
  type: 'EDIT_USER',
  data: data,
})

export const delUser = (data) => ({
  type: 'DEL_USER',
  data: data,
})

export const informUser = (data) => ({
    type: 'INFORM_USER',
    data: data,
  }
)

