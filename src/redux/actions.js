
export const fetchAllItems = () => ({
  type: 'FETCH_ALL_ITEMS',
  data: null
})

export const addFetchedItems = (data) => ({
  type: 'ADD_FETCHED_ITEMS',
  data: data
})
