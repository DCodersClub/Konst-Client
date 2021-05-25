const light = {};
const dark = {};

const themeReducer = (state = light, action) => {
  switch (action.type) {
    case "@theme/change":
      return action.payload === "dark" ? dark : light;
    default:
      return state;
  }
};

export default themeReducer;
