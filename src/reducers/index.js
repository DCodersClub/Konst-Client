import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import userReducer from "./user";

const reducers = combineReducers({
  theme: themeReducer,
  userState: userReducer,
});

export default reducers;
