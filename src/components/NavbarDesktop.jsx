import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { putTheme, transistion } from "./styled";
import { Button } from "../components/styled/Button";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;

  backdrop-filter: blur(3px);
  background-color: ${putTheme("background") || "black"}bf;
  color: ${putTheme("primary") || "green"};

  display: flex;
  align-items: center;

  padding: 0 1rem;
`;

const StyledLogo = styled.span`
  font-weight: 600;
  font-size: 3rem;
`;

const Logo = () => {
  return (
    <div>
      <StyledLogo>Konst</StyledLogo>
    </div>
  );
};

const NavLinkWrapper = styled.li`
  font-size: 1.2rem;
  color: ${putTheme("white") || "white"};
  transition: transform 170ms ${transistion.popup};
  position: relative;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    height: 2px;
    width: 100%;
    transform-origin: left;
    transform: scaleX(0);
    border-radius: 5px;

    background-color: ${putTheme("primary")};

    transition: transform 350ms ease;
  }

  :hover {
    ::after {
      transform: scaleX(1);
    }
  }

  ${({ active }) =>
    active &&
    css`
      ::after {
        transform: scale(1);
      }
      color: ${putTheme("primary")};
    `}
`;

const NavLink = ({ to, children }) => {
  const { pathname } = useLocation();

  if (!to) to = "/";

  const isActive = pathname === to;
  return (
    <NavLinkWrapper active={isActive}>
      <Link to={to}>{children}</Link>
    </NavLinkWrapper>
  );
};

const NavbarDesktop = () => {
  return (
    <NavbarContainer>
      <Logo />
      <ul className="flex space-x-4 ml-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contest">Contest</NavLink>
        <NavLink to="/archive">Archive</NavLink>
        <NavLink to="/certification">Certification</NavLink>
        <NavLink to="/halloffame">Hall Of Fame</NavLink>
      </ul>
      <div className="ml-auto space-x-2">
        <Button intractive>
          <Link to="/signin">Sign In</Link>
        </Button>
        <Button intractive>
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </NavbarContainer>
  );
};

export default NavbarDesktop;