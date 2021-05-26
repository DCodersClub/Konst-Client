import React from "react";
import styled from "styled-components";
import { putTheme } from "./styled";

const Bar = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background-color: ${putTheme("darkGreen")};
  border-radius: 10px;
`;

const Box = styled.div`
  height: 35px;
  width: 40px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 170ms ease, background-color 170ms linear;
  border-radius: 50%;

  :hover {
    span {
      transform: scale(1.05);
    }
    background-color: ${putTheme("grey100")};
  }
`;

const Hamburger = () => {
  return (
    <Box>
      <Bar />
      <Bar />
      <Bar />
    </Box>
  );
};

export default Hamburger;
