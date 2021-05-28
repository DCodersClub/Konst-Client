import React from "react";
import styled, { css } from "styled-components";

const centerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LandingSectionStyled = styled.section`
  background-image: url(${({ url }) => url});
  background-color: black;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 0 1rem;

  ${({ center }) => center && centerStyle};
`;

export const LandingSection = (props) => {
  let { children, center, imageUrl } = props;
  if (!imageUrl) imageUrl = "https://purry03.github.io/Konst-Frontend/img/banner.jpg";
  return (
    <LandingSectionStyled url={imageUrl} center={center}>
      {children}
    </LandingSectionStyled>
  );
};
