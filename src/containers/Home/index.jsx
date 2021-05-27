import React from "react";
import styled from "styled-components";
import { putTheme } from "../../components/styled";
import { LandingSection } from "../common/Common";

const Wrapper = styled.div`
  padding: 2rem 0;
  width: 90%;
  /* background-color: red; */
`;

const Subtitle = styled.div`
  --angle: 45deg;
  background-image: linear-gradient(var(--angle), ${putTheme("primary")}, #43d1ae);
  color: ${putTheme("background")};
  /* line-height: 1.3; */
  padding: 0.5rem;
  display: inline-block;
`;

const Home = () => {
  return (
    <div>
      <LandingSection center>
        <Wrapper className="text-xl">
          <span className="mb-2 inline-block">Konst {new Date().getFullYear()}</span>
          <h2 className="text-6xl font-extrabold tracking-tighter space-y-2">
            <div>Can you beat your friends in the</div>
            <Subtitle>Art of programming ?</Subtitle>
          </h2>
        </Wrapper>
      </LandingSection>
    </div>
  );
};

export default Home;
