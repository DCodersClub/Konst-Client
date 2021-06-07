import React from "react";
import useMediaQuery from "../hooks/useMediaQuary";
import { viewport } from "../theme";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  var size = useMediaQuery(`min-width: ${viewport.sm}px`) && "sm";

  switch (size) {
    case "sm":
      return <NavbarDesktop />;
    default:
      return <NavbarMobile />;
  }
};

export default Navbar;
