import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:8000/api",
  responseType: "json",
  responseEncoding: "utf-8",
  headers: {
    "Content-Type": "application/json",
  },
});

const responseHandler = (response) => {
  const { status, data } = response;
  if (status >= 200 && status < 300) return { ok: true, data };
};
const responseErrorHandler = (response) => {
  const error = response.data;
  return { ok: false, error };
};

export const signin = async ({ email, password }) => {
  if (!email || !password)
    throw new Error(`Expected email and password got, email: ${email} ${password}`);
  try {
    const credential = { email, password };
    const response = await server.post("/signin", credential);
    return responseHandler(response);
  } catch (e) {
    responseErrorHandler(e.response);
  }
};

export const signup = async (userData) => {
  if (!userData) throw new Error(`Expected Data To Be Send, Got ${userData}`);
  try {
    const response = await server.post("/signup", userData);
    return responseHandler(response);
  } catch (e) {
    responseErrorHandler(e.response);
  }
};

export const signout = async () => {
  // if (!userData) throw new Error(`Expected Data To Be Send, Got ${userData}`);
  try {
    const response = await server.get("/signout");
    return responseHandler(response);
  } catch (e) {
    responseErrorHandler(e.response);
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
    const result = responseHandler(response);
    return result;
  } catch (e) {
    responseErrorHandler(e.response);
  }
};
