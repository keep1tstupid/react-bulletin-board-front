
export const fetchAllUsers = () => ({
  type: 'FETCH_ALL_USERS',
  data: null,
})

export const addFetchedUsers = (data) => ({
  type: 'ADD_FETCHED_USERS',
  data: data,
})