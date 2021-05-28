import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  if (!to) to = "/";

  return (
    <li>
      <Link path={to}>{children}</Link>
    </li>
  );
};

export default React.memo(NavLink);
