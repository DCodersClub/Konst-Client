const font = {
  content: "Mulish, sans-serif",
  heading: "Pacaembu, sans-serif",
};

const colors = {
  name: "light",
  font,
  fontColor: "#151a1e",
  grey100: "#E7EAED",
  grey500: "#2d2d31",
  white: "#fbfbfb",
  lightBlue: "#44A3bd",
  darkBlue: "#061475",
  darkGreen: "#064962",
  blueGreen: "#5CEBDF",
};

const light = {
  name: "light",
  font,
  fontColor: colors.fontColor,
  bgColor: colors.white,
  grey100: "#E7EAED",
  grey500: "#2d2d31",
  lightBlue: "#44A3bd",
  darkBlue: "#061475",
  darkGreen: "#064962",
  blueGreen: "#5CEBDF",
};

const dark = {
  name: "dark",
  font,
  fontColor: colors.white,
  bgColor: colors.darkGreen,
  grey100: "#E7EAED",
  grey500: "#2d2d31",
  lightBlue: "#44A3bd",
  darkBlue: "#061475",
  darkGreen: "#064962",
  blueGreen: "#5CEBDF",
};

export { light, dark };
