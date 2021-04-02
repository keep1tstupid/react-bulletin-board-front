import axios from "axios";

console.log(process.env)

export default axios.create({
  // baseURL: "https://bboard-app.herokuapp.com",
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});
