import { server } from "../apis/server";
import { loadingUser, saveUser, userError } from "../reducers/user";

export const signup = (data) => async (dispatch, getStore) => {
  const { userState } = getStore();
  if (userState.user) return userError(dispatch, { message: "Already Signed In" });

  loadingUser(dispatch, true);
  try {
    const response = await server.post("/signup", data);
    if (response.status >= 200 && response.status < 300) {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      saveUser(dispatch, user);
    } else {
      userError(dispatch, response.data);
    }
  } catch (error) {
    console.log(error);
    userError(dispatch, { name: error.name, message: error.message });
  }
};

export const getUser =
  (id = "") =>
  async (dispatch, getStore) => {
    if (id) throw new Error("Invalid Id");

    const response = await server.get("");
  };
