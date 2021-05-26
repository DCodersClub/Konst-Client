import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: static;
  top: 0;
  left: 0;
  /* z-index: 1000; */

  /* width: 100%; */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Logo</div>
      <div>menubar</div>
    </NavbarContainer>
  );
};

export default Navbar;
