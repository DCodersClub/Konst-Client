import { createGlobalStyle } from "styled-components";

export const transistion = {
  popup: () => "cubic-bezier(0.075, 0.82, 0.165, 1)",
};

export const opacity =
  (value = 0) =>
  () => {
    if (value > 1) value = 1;
    if (value < 0) value = 0;
    let num = value * 255;
    return `${num <= 16 ? "0" : ""}${Math.round(value * 255).toString(16)}`;
  };

export const putTheme = (field) => {
  return ({ theme }) => {
    // eslint-disable-next-line no-console
    if (!theme[field]) console.warn("Unknow Field", field);
    return theme[field];
  };
};

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  body {
    min-height: 100vh;
    color: ${putTheme("secondary") || "#f2f2f2"};
    background-color: ${putTheme("dark") || "#000000"};
    transition: all 100ms linear;
    font-family: ${({ theme }) => theme.font.poppins};
    width: 100vw;
    overflow: hidden;
  }
`;
