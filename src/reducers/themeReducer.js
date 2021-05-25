const light = {
  name: "light",
  bgColor: "#fafafa",
  fontColor: "#444",
};
const dark = {
  name: "dark",
  bgColor: "#444",
  fontColor: "#fafafa",
};

const themeReducer = (state = light, action) => {
  switch (action.type) {
    case "@theme/switch":
      return action.payload === "dark" ? dark : light;
    default:
      return state;
  }
};

export default themeReducer;
