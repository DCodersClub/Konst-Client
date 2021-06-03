import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { putTheme, transistion } from "./styled";
import { Button } from "../components/styled/Button";
import NavbarContainer from "./NavbarContainer";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/user";

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

const NavLink = ({ to, children, as }) => {
  const { pathname } = useLocation();

  if (!to) to = "/";

  const isActive = pathname === to;
  return (
    <NavLinkWrapper as={as} active={isActive}>
      <Link to={to}>{children}</Link>
    </NavLinkWrapper>
  );
};

const NavbarRight = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickHandler = () => {
    // console.log("hel");
    return dispatch(signout(() => history.push("/")));
  };
  if (user)
    return (
      <div className="ml-auto space-x-3">
        <Link to="/profile">
          <Button focusable={false} intractive>
            {user.name.first} {user.name.last}
          </Button>
        </Link>
        <Button intractive onClick={onClickHandler}>
          Sign Out
        </Button>
      </div>
    );

  return (
    <div className="ml-auto space-x-2">
      <Link to="/signin">
        <Button focusable={false} intractive>
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button focusable={false} intractive>
          Sign Up
        </Button>
      </Link>
    </div>
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
      <NavbarRight />
    </NavbarContainer>
  );
};

export default NavbarDesktop;
