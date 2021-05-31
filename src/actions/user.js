import { server } from "../apis/server";
import { loadingUser, saveUser, userError } from "../reducers/user";

export const loadUserData = () => async (dispatch) => {
  const id = localStorage.getItem("id");
  if (!id) return dispatch({ type: "signout" });

  try {
    loadingUser(dispatch, true);

    const response = await server.get(`user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      const user = response.data;
      saveUser(dispatch, user);
      dispatch({ type: "signin" });
    }
  } catch (e) {
    userError(dispatch, e);
  }
};

export const signup = (data) => async (dispatch, getStore) => {
  const { userState } = getStore();
  if (userState.user) return userError(dispatch, { message: "Already Signed In" });

  loadingUser(dispatch, true);
  try {
    const response = await server.post("/signup", data);
    if (response.status >= 200 && response.status < 300) {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("id", user.id);
      saveUser(dispatch, user);
    } else {
      userError(dispatch, response.data);
    }
  } catch (error) {
    userError(dispatch, { name: error.name, message: error.message });
  }
};

export const signin = (data) => async (dispatch, getStore) => {
  const { userState } = getStore();
  if (userState.user) return userError(dispatch, { message: "Already Signed In" });

  loadingUser(dispatch, true);
  try {
    const response = await server.post("/signin", data);
    if (response.status >= 200 && response.status < 300) {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("id", user.id);
      saveUser(dispatch, user);
      dispatch({ type: "signin" });
    } else {
      userError(dispatch, response.data);
    }
  } catch (error) {
    userError(dispatch, { name: error.name, message: error.message });
  }
};
