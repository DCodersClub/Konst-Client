import React from "react";

import styled from "styled-components";
import { opacity, putTheme } from "../../components/styled";

import { LandingSectionStyled } from "../common/Common";
import backgroundDesktop from "../../assets/background-desktop.jpg";

const LandingSection = styled(LandingSectionStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  border: 1px solid white;
  /* background-color: red; */
  display: flex;
  max-width: 55%;
  min-width: 600px;
  border-radius: 0.5rem;
  position: relative;

  .sign-up__bg {
    font-size: 5rem;
    font-weight: 800;
    color: ${putTheme("secondary")}${opacity(0.2)};
    pointer-events: none;
    position: absolute;
    top: 5%;
    right: 5%;
  }
`;

const Container = styled.section`
  padding: 1rem;
`;

const LeftContainer = styled(Container)`
  flex: 5;
`;
const RightContainer = styled(Container)`
  position: relative;
  /* background-color: ${putTheme("primary")}; */
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${() => backgroundDesktop});
    background-position: center right 20%;
    background-size: cover;
    z-index: -1;
  }
  flex: 3;
`;

const Signup = () => {
  return (
    <LandingSection>
      <Wrapper>
        <span className="sign-up__bg">Sign Up</span>
        <LeftContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem necessitatibus
          veniam nam repellat dolore cumque amet voluptatum, architecto non iure nemo vel? Iusto
          minima, sunt exercitationem repellendus assumenda libero?
        </LeftContainer>
        <RightContainer>
          <div>hello</div>
        </RightContainer>
      </Wrapper>
    </LandingSection>
  );
};

export default Signup;
