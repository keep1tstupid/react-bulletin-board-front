
// actions for items
export const fetchAllItems = () => ({
  type: 'FETCH_ALL_ITEMS',
  data: null,
})

export const addFetchedItems = (data) => ({
  type: 'ADD_FETCHED_ITEMS',
  data: data,
})

// actions for item types
export const fetchAllItemTypes = () => ({
  type: 'FETCH_ALL_ITEM_TYPES',
  data: null,
})

export const addFetchedItemTypes = (data) => ({
  type: 'ADD_FETCHED_ITEM_TYPES',
  data: data,
})

// action for add new item
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
