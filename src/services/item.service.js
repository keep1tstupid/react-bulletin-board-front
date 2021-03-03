import http from "../http-common";

export const getAll = async () => {
  return await http.get("/items");
}

export const getItemById = (id) => {
  return http.get(`/items/${id}`);
}

export const getItemByType = (type) => {
  return http.get(`/items/${type}`);
}

export const createItem = (data)  => {
  return http.post("/items", data);
}

export const updateItem = (id, data) => {
  return http.put(`/items/${id}`, data);
}

export const deleteItem = (id, data) => {
  return http.put(`/items/${id}`, data);
}

export const deleteAll = () => {
  return http.delete(`/items`);
}

//export default ItemDataService;
