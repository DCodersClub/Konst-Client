import React from "react";
import styled from "styled-components";
import { opacity, putTheme } from "../../components/styled";
import { LandingSectionStyled } from "../common/Common";
import backgroundDesktop from "../../assets/background-desktop.jpg";

const LandingSection = styled(LandingSectionStyled)`
  display: flex;
  align-items: center;
  background-image: url(${() => backgroundDesktop});
`;

const Wrapper = styled.div`
  color: ${putTheme("secondary")}${opacity(0.5)};
  padding: 1rem 2rem;
  .konst-year {
    display: inline-block;
    font-size: 1.1em;
    margin-bottom: 2rem;
  }
  h2 {
    div {
      font-size: 2rem;
      font-weight: 500;
      color: ${putTheme("secondary")};
      text-transform: capitalize;
      &.title {
        line-height: 75%;
        font-size: 3.25rem;
        font-weight: 700;
        color: ${putTheme("primary")};
      }
    }
  }
  p {
    color: ${putTheme("secondary")}${opacity(0.85)};
    font-family: ${({ theme }) => theme.font.content};
    letter-spacing: 1px;
    line-height: 1.7;
    margin-top: 2rem;
    max-width: 50ch;
    font-size: 1.25em;
  }
`;

const Home = () => {
  return (
    <LandingSection>
      <Wrapper>
        <span className="konst-year">Konst {new Date().getFullYear()}</span>
        <h2>
          <div>Can you beat your friends in the</div>
          <div className="title">Art of programming ?</div>
        </h2>
        <p>
          Konst lets you engage or source top developers with hackathons, while also enabling you to
          assess, interview and upskill them with ease.
        </p>
      </Wrapper>
    </LandingSection>
  );
};

export default Home;
