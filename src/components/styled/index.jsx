import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bgColor || "red"};
    color:  ${({ theme }) => theme.fontColor || "white"}
  }
`;
