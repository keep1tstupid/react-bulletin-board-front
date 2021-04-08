
export const getNotification = () => ({
  type: 'GET_NOTIFICATION',
  data: null,
})

export const setNotification = (data) => ({
  type: 'SET_NOTIFICATION',
  data: data,
})

export const clearNotification = () => ({
  type: 'CLEAR_NOTIFICATION',
  data: null,
})