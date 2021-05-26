import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Sun, Moon, Menu } from "react-feather";
import { useDispatch } from "react-redux";

import { putTheme, transistion } from "./styled";

const NavbarContainer = styled.nav`
  position: static;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Logo = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: ${putTheme("fontColor")};
`;

const IconContainer = styled.button`
  transition: transform 130ms ${transistion.popup};
  :hover {
    transform: scale(1.05);
  }
`;

const MenuIcon = ({ handleSideBar }) => {
  return (
    <IconContainer onClick={handleSideBar}>
      <Menu />
    </IconContainer>
  );
};

const ThemeIcon = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const onClickHandler = () =>
    dispatch({ type: "@theme/switch", payload: theme.name === "dark" ? "light" : "dark" });

  return (
    <IconContainer onClick={onClickHandler}>
      {theme.name === "dark" ? <Sun /> : <Moon />}
    </IconContainer>
  );
};

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <NavbarContainer>
        <div>
          <Logo>
            {"<"}Konst{" />"}
          </Logo>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeIcon />
          <MenuIcon handleSideBar={() => setSideBarOpen(true)} />
        </div>
      </NavbarContainer>

      {sideBarOpen && "SideBar"}
    </>
  );
};

export default Navbar;
