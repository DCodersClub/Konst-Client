import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { default as Container } from "./NavbarContainer";
import { Button } from "./styled/Button";

const NavbarContainer = styled(Container)`
  padding: 0.5rem 1.5rem;
`;

const NavbarMobile = () => {
  return (
    <NavbarContainer className="justify-between">
      <Link to="/">
        <Logo small="true" />
      </Link>
      <Link to="/signup">
        <Button small>Sign Up</Button>
      </Link>
    </NavbarContainer>
  );
};

export default NavbarMobile;
