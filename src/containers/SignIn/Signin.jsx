import React from "react";

import styled from "styled-components";

import { translucant } from "../../components/styled/Styles";
import { LandingSection } from "../common/Common";
import Form from "./Form";

const SignupFormWrapper = styled.section`
  ${translucant}
  backdrop-filter: blur(6px);
  background-color: rgba(150, 250, 150, 0.2);
  border-radius: 0.5rem;
  transition: width 500ms ease-in-out;
  width: 100%;
  @media (min-width: 640px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Signin = () => {
  return (
    <LandingSection center>
      <SignupFormWrapper className="shadow-lg">
        <section className="p-5">
          <Form />
        </section>
      </SignupFormWrapper>
    </LandingSection>
  );
};

export default Signin;
