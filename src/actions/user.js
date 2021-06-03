import { fetchUserData, signup as signupUser, signin as signinUser } from "../apis/server";
import { auth } from "../reducers/authReducer";
import { user } from "../reducers/userReducer";

/**
 * FetchUserData From Server, Expect UserId as Input,
 * if not provided, it loooks in localstorage for key = id
 * @param {String} id User Id
 * @returns {undefined}
 */
export const loadUserData = (id) => async (dispatch) => {
  if (!id) {
    id = localStorage.getItem("id");
    if (!id) return dispatch({ type: "signout" });
  }

  const userid = id;
  if (typeof userid !== "string") throw new Error(`Expected id: String Got ${typeof userid}`);

  try {
    dispatch(user.fetchingData());

    const result = await fetchUserData(userid);
    const { ok } = result;
    if (!ok) throw result.error;

    dispatch(user.saveData(result.data));
    dispatch(auth.signedIn());
  } catch (e) {
    dispatch(user.saveData(undefined, e));
  }
};

export const signup = (data) => async (dispatch, getStore) => {
  const { userState } = getStore();
  if (userState?.user) return; // already signup

  try {
    dispatch(user.fetchingData());

    const result = await signupUser(data);
    if (!result.ok) throw result.error;

    const { token, user: userData } = result.data;
    localStorage.setItem("token", token);
    localStorage.setItem("id", userData.id);

    dispatch(user.saveData(userData));
    dispatch(auth.signedIn());
  } catch (error) {
    dispatch(user.saveData(undefined, error));
  }
};

export const signin = (data) => async (dispatch, getStore) => {
  const { userState } = getStore();
  if (userState.user) return; // already signed in

  try {
    dispatch(user.fetchingData());

    const result = await signinUser(data);
    if (!result.ok) throw result.error;

    const { token, user: userData } = result.data;
    localStorage.setItem("token", token);
    localStorage.setItem("id", userData.id);

    dispatch(user.saveData(userData));
    dispatch(auth.signedIn());
  } catch (error) {
    dispatch(user.saveData(undefined, error));
  }
};
