import { combineReducers } from "redux";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";
import userReducer from "./user";

const reducers = combineReducers({
  theme: themeReducer,
  userState: userReducer,
  signedIn: authReducer,
});

export default reducers;
