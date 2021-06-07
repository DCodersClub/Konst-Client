const font = {
  poppins: "Poppins, sans-serif",
  content: "Montserrat, sans-serif",
  heading: "Karla, sans-serif",
};

const color = {
  green: "#5ac754",
  dullWhite: "#f2f2f2",
  black: "#000000",
};

const viewport = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1366,
};

const theme = {
  primary: color.green,
  secondary: color.dullWhite,
  dark: color.black,
};

const colors = {
  name: "light",
  font,
  greenLight: "#5CFE50",
  black: "#000000",
  white: "#fafafa",
};

const light = {
  name: "light",
  font,
  primary: "blue",
  background: colors.black,
  white: color.dullWhite,
};

export { light, theme, viewport };
