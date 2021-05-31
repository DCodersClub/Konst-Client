import React from "react";
import styled, { keyframes } from "styled-components";
import { putTheme } from "./styled";

const rotate = keyframes`
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(270deg);
  }
`;

const StyledSpinner = styled.div`
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  span {
    width: 100%;
    height: 100%;
    border: 5px solid rgba(248, 214, 214, 0.1);
    ${({ dark }) => dark && "border-color:rgba(50, 50, 50, 1)"};
    border-right: 5px solid ${putTheme("primary")};
    border-radius: 50%;
    animation: ${rotate} 700ms linear infinite;
  }
`;

const Spinner = ({ size, dark }) => {
  return (
    <StyledSpinner size={size} dark={dark}>
      <span />
    </StyledSpinner>
  );
};

export default Spinner;
