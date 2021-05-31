import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:8000/api",
  responseType: "json",
  responseEncoding: "utf-8",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = (data) => {
  return server.post("/signup", data);
};
