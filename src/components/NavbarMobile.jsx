import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { default as Container } from "./NavbarContainer";
import Profile from "./ProfileButton";
import { Button } from "./styled/Button";

const NavbarContainer = styled(Container)`
  padding: 0.5rem 1.5rem;
`;

const NavbarRight = () => {
  const user = useSelector((state) => state.userState.user);
  if (user)
    return (
      <Profile>
        {user.name.first} {user.name.last}
      </Profile>
    );

  return (
    <div className="ml-auto space-x-2">
      <Link to="/signup">
        <Button focusable={false} small>
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

const NavbarMobile = () => {
  return (
    <NavbarContainer className="justify-between">
      <Link to="/">
        <Logo small="true" />
      </Link>
      <NavbarRight />
    </NavbarContainer>
  );
};

export default NavbarMobile;
