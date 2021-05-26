import { createGlobalStyle } from "styled-components";

const theme = (field) => {
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
    color: ${theme("grey500") || "#444"};
    background-color: ${theme("white") || "#fbfbfb"};
    font-family: ${({ theme }) => theme.font.content};
  }
`;
