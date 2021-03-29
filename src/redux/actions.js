
// actions for items
export const fetchAllItems = () => ({
  type: 'FETCH_ALL_ITEMS',
  data: null,
})

export const addFetchedItems = (data) => ({
  type: 'ADD_FETCHED_ITEMS',
  data: data,
})

// action to add new item
export const addNewItem = (data) => ({
  type: 'ADD_NEW_ITEM',
  data: data,
})

// action to delete item
export const deleteItem = (data) => ({
  type: 'DELETE_ITEM',
  data: data,
})

// action to edit item
export const editItem = (data) => ({
  type: 'EDIT_ITEM',
  data: data,
})

// action to add file
export const addFile = (data) => ({
  type: 'ADD_FILE',
  data: data,
})

// // actions for filters for selectors
// export const setStateFilter = (data) => ({
//   type: 'SET_STATE_FILTER',
//   data: data,
// })
//
// export const setTypeFilter = (data) => ({
//   type: 'SET_TYPE_FILTER',
//   data: data,
// })

