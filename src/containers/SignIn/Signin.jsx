import React from "react";

import styled from "styled-components";

import { LandingSectionStyled } from "../common/Common";

import { LeftContainer, RightContainer, Wrapper } from "../common/FormContainer";
import { Link } from "react-router-dom";
import Form from "./Form";
// import Form from "./Form";

const LandingSection = styled(LandingSectionStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signin = () => {
  return (
    <LandingSection>
      <Wrapper>
        <span className="sign-up__bg">Sign In</span>
        <LeftContainer>
          <Form />
        </LeftContainer>
        <RightContainer>
          <div className="header">Welcome Back</div>
          <div className="action">
            <span>Don&apos;t have an account?</span>
            <br />
            <Link to="/register">Register</Link>
          </div>
        </RightContainer>
      </Wrapper>
    </LandingSection>
  );
};

export default Signin;
