import { light } from "../theme";

const themeReducer = (state = light, action) => {
  switch (action.type) {
    case "@theme/switch":
      return action.payload === "dark" ? light : light;
    default:
      return state;
  }
};

export default themeReducer;
