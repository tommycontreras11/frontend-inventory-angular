import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7189/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});

export default api;
