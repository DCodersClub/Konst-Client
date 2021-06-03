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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 500ms linear;

  @media (min-width: 1024px) {
    transition: all 500ms linear;

    background-position: right -35% center;
    background-size: 125vh;
    ${({ center }) => center && centerStyle};
  }
  min-height: 100vh;
  padding: 0 1rem;
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
