import styled from "styled-components";
import { translucant } from "./styled/Styles";

export default styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 100;
  ${translucant}
`;
