import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:8000/api",
  responseType: "json",
  responseEncoding: "utf-8",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = async (userData) => {
  try {
    if (!userData) throw new Error(`Expected Data To Be Send, Got ${userData}`);
    const response = await server.post("/signup", userData);
    const { status, data } = response;
    if (status >= 200 && status < 300) return { ok: true, data };
  } catch (e) {
    const error = e.response.data;
    return { ok: false, error };
  }
};

export const fetchUserData = async (id) => {
  if (!id) throw new Error(`Exprected ID to be string, got ${id}`);
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Login Token Not Found");

  try {
    const requestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `user/${id}`;
    const response = await server.get(url, requestConfig);
    const { status, data } = response;
    if (status >= 200 && status < 300) return { ok: true, data };
  } catch (e) {
    const error = e.response.data;
    return { ok: false, error };
  }
};
