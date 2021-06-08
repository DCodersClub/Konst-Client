import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { LandingSectionStyled } from "../common/Common";
import { LeftContainer, RightContainer, Wrapper } from "../common/FormContainer";
import Form from "./Form";

const LandingSection = styled(LandingSectionStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signup = () => {
  return (
    <LandingSection>
      <Wrapper>
        <span className="sign-up__bg">Sign Up</span>
        <LeftContainer>
          <Form />
        </LeftContainer>
        <RightContainer>
          <div className="header">Create Your Account</div>
          <div className="action">
            <span>Already a member?</span>
            <br />
            <Link to="/login">Login</Link>
          </div>
        </RightContainer>
      </Wrapper>
    </LandingSection>
  );
};

export default Signup;
