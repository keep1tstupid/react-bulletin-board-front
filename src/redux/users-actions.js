
export const fetchAllUsers = () => ({
  type: 'FETCH_ALL_USERS',
  data: null,
})

export const addFetchedUsers = (data) => ({
  type: 'ADD_FETCHED_USERS',
  data: data,
})

// action to add new item
export const addNewUser = (data) => ({
  type: 'ADD_NEW_USER',
  data: data,
})