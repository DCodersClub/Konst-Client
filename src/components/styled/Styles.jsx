import { css } from "styled-components";
import { opacity, putTheme } from ".";

export const translucant = css`
  backdrop-filter: blur(7px);
  background-color: ${putTheme("background") || "black"}${opacity(0.5)};
  color: ${putTheme("primary") || "green"};
`;

export const glow = (color = "primary", brightness) => css`
  text-shadow: 0px 0px 6px ${putTheme(color)}${opacity(brightness ?? 0.35)};
`;
