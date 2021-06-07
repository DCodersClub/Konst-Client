import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { opacity, putTheme } from "../../components/styled";

import { LandingSectionStyled } from "../common/Common";
import Form from "./Form";
import backgroundDesktop from "../../assets/background-desktop.jpg";

const LandingSection = styled(LandingSectionStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* border: 1px solid white; */
  overflow: hidden;
  /* background-color: red; */
  display: flex;
  max-width: 650px;
  width: 50%;
  min-width: 500px;
  border-radius: 0.5rem;
  min-height: 55vh;
  max-height: 600px;
  position: relative;
  z-index: 3;

  .sign-up__bg {
    font-size: 5rem;
    font-weight: 800;
    color: ${putTheme("secondary")}${opacity(0.03)};
    pointer-events: none;
    position: absolute;
    top: 5%;
    right: 5%;
  }
`;

const Container = styled.section`
  padding: 2rem 1.5rem;
`;

const LeftContainer = styled(Container)`
  flex: 5.25;
  background-color: ${putTheme("secondary")}${opacity(0.05)};
  background-image: linear-gradient(180deg, #fff0, rgba(49, 49, 49, 0.12) 46.35%, #000000a1 100%);
`;

const RightContainer = styled(Container)`
  position: relative;
  background-color: ${putTheme("primary")}${opacity(0.3)};
  background-image: linear-gradient(270deg, #fff0, rgba(49, 49, 49, 0.12) 46.35%, #000000a1 100%);
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-flow: column;
  text-align: right;
  ::before {
    content: "";
    filter: grayscale(0.4);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${() => backgroundDesktop});
    background-position: center right 30%;
    background-size: cover;
    z-index: -1;
  }
  .header {
    font-size: 2.45rem;
    font-weight: 700;
    width: min-content;
    line-height: 1;
    color: #fff;
  }
  .action {
    text-transform: capitalize;
    span {
      font-size: 0.975em;
    }
    a {
      text-decoration: underline;
    }
  }
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
