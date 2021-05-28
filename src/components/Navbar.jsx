import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";

import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [viewport, setViewport] = useState(() => (window.innerWidth < 640 ? "small" : "medium"));

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const onChangeHandler = (e) => {
      if (e.matches) return setViewport("medium");
      setViewport("small");
    };
    media.addEventListener("change", onChangeHandler);
    return () => {
      media.removeEventListener("change", onChangeHandler);
    };
  }, []);

  return viewport === "small" ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
