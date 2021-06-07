import React from "react";
import styled, { css } from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import { opacity, putTheme, transistion } from "./styled";
import { Button } from "../components/styled/Button";
import NavbarContainer from "./NavbarContainer";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/user";

const sharedStyle = {
  active: css`
    border-color: ${putTheme("primary")};
    background-color: ${putTheme("primary")}${opacity(0.2)};
    box-shadow: 0 0 0.75 0 ${putTheme("primary")};
    a {
      outline: none;
      color: ${putTheme("secondary")};
    }
    :hover {
      a {
        ::after {
          display: none;
        }
      }
    }
  `,
};

const NavLinkWrapper = styled.li`
  font-size: 0.9em;
  font-weight: 500;
  color: ${putTheme("secondary") || "white"}${opacity(0.8)};
  transition: color 170ms ${transistion.popup};
  border: 2px solid transparent;
  border-radius: 0.5rem;
  padding: 0.45rem;
  & + & {
    margin-left: 0.5rem;
  }

  a {
    display: block;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 100%;
      transform-origin: right;
      transform: scale(0);
      transition: transform 1200ms ${transistion.popup};
      background-color: ${putTheme("primary")};
    }
  }

  :hover {
    color: ${putTheme("secondary") || "white"};
    a {
      ::after {
        transform-origin: left;
        transition: transform 1200ms ${transistion.popup};
        transform: scale(1);
      }
    }
  }

  :focus-within {
    ${sharedStyle.active}
  }

  ${({ active }) =>
    active &&
    css`
      color: ${putTheme("secondary") || "white"};
      text-shadow: 0 0 0.75rem ${putTheme("secondary") || "white"};
    `}
  ${({ glow }) =>
    glow &&
    css`
      color: ${putTheme("primary") || "green"};
      text-shadow: 0 0 0.75rem ${putTheme("primary") || "white"};
    `}
`;

const NavLink = ({ to, children, as, glow }) => {
  const { pathname } = useLocation();

  if (!to) to = "/";

  const isActive = pathname === to;
  return (
    <NavLinkWrapper glow={glow} as={as} active={isActive}>
      <Link to={to}>{children}</Link>
    </NavLinkWrapper>
  );
};

const NavbarRight = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickHandler = () => {
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
    <ul className="ml-auto flex space-x-2 list-none">
      <NavLink glow to="/login">
        LOGIN
      </NavLink>
      <NavLink glow to="/register">
        REGISTER
      </NavLink>
    </ul>
  );
};

const NavbarDesktop = () => {
  return (
    <NavbarContainer>
      <Logo />
      <ul className="flex ml-10">
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
