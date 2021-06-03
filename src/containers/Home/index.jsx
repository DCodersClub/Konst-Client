import React from "react";
import styled from "styled-components";
import { putTheme } from "../../components/styled";
import { LandingSection } from "../common/Common";

const Wrapper = styled.div`
  font-size: 1.2rem;
  padding-top: 15vh;
  margin-bottom: 0.5rem;
  text-align: center;
  @media (min-width: 640px) {
    text-align: unset;
  }
  @media (min-width: 1024px) {
    padding: 2rem 0;
    width: 90%;
    margin-bottom: 0;
  }
`;

const Subtitle = styled.div`
  --angle: 45deg;
  background-image: linear-gradient(var(--angle), ${putTheme("primary")}, #43d1ae);
  color: ${putTheme("background")};
  /* line-height: 1.3; */
  padding: 0.5rem;
  @media (min-width: 1024px) {
    display: inline-block;
    margin-top: 0;
  }
`;

const Home = () => {
  return (
    <div>
      <LandingSection center>
        <Wrapper className="text-xl md:text-xl min-h-full">
          <span className="mb-2 inline-block">Konst {new Date().getFullYear()}</span>
          <h2 className="text-4xl md:text-6xl font-bold md:font-extrabold tracking-tighter space-y-6 md:space-y-2">
            <div>Can you beat your friends in the</div>
            <Subtitle className="mt-8 font-extrabold md:mt-0">Art of programming ?</Subtitle>
          </h2>
        </Wrapper>
      </LandingSection>
    </div>
  );
};

export default Home;
