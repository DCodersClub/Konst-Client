import { createGlobalStyle } from "styled-components";

export const transistion = {
  popup: () => "cubic-bezier(0.075, 0.82, 0.165, 1)",
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
  }
  body {
    min-height: 100vh;
    color: ${putTheme("white") || "#white"};
    background-color: ${putTheme("background") || "#black"};
    transition: all 100ms linear;
    font-family: ${({ theme }) => theme.font.content};
  }
`;
