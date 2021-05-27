import { css } from "styled-components";
import { putTheme } from ".";

export const translucant = css`
  backdrop-filter: blur(3px);
  background-color: ${putTheme("background") || "black"}bf;
  color: ${putTheme("primary") || "green"};
`;
