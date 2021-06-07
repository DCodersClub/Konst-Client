import React from "react";
import styled, { css } from "styled-components";
import backgroundDesktop from "../../assets/background-desktop.jpg";
import { media, putTheme } from "../../components/styled";

export const LandingSectionStyled = styled.section`
  background-color: ${putTheme("dark")};
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
  transition: all 500ms linear;
  min-height: 100vh;
  padding: 0 1rem;
  ${media.md(css`
    transition: all 500ms linear;
  `)}
  ${({ styles }) => styles && styles}
`;

export const LandingSection = (props, styles) => {
  let { children, center, imageUrl } = props;
  if (!imageUrl) imageUrl = backgroundDesktop;
  return (
    <LandingSectionStyled styles={styles} url={imageUrl} center={center}>
      {children}
    </LandingSectionStyled>
  );
};
