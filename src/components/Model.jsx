import React, { createPortal } from "react";
import styled from "styled-components";

const Model = ({ children }) => {
  return <ModelContainer>{children}</ModelContainer>;
};

// ------------------------------------------------------------------
const ModelContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
`;

export default (props) => createPortal(<Model {...props} />, document.getElementById("portal"));
