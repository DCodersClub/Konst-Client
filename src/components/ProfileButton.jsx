import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { putTheme, transistion } from "./styled";

const StyledProfile = styled.button`
  border: 2px solid ${putTheme("primary")};
  margin-left: auto;
  padding: 0.05rem 0.15rem;
  border-radius: 0.275rem;
  font-weight: bold;
  transition: all 250ms ${transistion.popup};

  :active,
  :hover {
    /* border-color: ${putTheme("background")}; */
    color: ${putTheme("background")};
    background-color: ${putTheme("primary")};
  }
`;

const Profile = ({ children }) => {
  return (
    <Link to="/profile" className="ml-auto">
      <StyledProfile>{children}</StyledProfile>
    </Link>
  );
};

export default Profile;
