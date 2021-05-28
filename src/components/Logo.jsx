import React from "react";
import styled, { css } from "styled-components";

const StyledLogo = styled.span`
  font-weight: 600;
  font-size: 3rem;

  ${({ small }) =>
    small &&
    css`
      font-size: 1.75rem;
    `}
`;

const Logo = ({ small }) => {
  return (
    <div>
      <StyledLogo small={small}>Konst</StyledLogo>
    </div>
  );
};

export default Logo;
