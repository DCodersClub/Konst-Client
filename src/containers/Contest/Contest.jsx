import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../components/styled/Button";
import technofestImage from "../../assets/techofest.jpg";
import { media, opacity, putTheme } from "../../components/styled";
import { ReactComponent as UserIcon } from "../../assets/userLogo.svg";

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    ${media.sm(css`
      display: flex;
    `)}
    width: 85%;
    gap: 5rem;
    & > section {
      flex: 1;
      /* border: 1px solid #fff; */
    }
  }

  .graphic-content {
    // update fradient from figma
    background-image: linear-gradient(0deg, #000000a0 30%, #fff1), url(${() => technofestImage});
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem;
    padding: 1.2rem 1.5rem;

    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 0.25rem;
  }

  .contest-name {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 1;
  }
  time.contest-time {
    color: ${putTheme("primary")};
    font-size: 1.35rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  .detail-content {
    padding: 2rem 0;
  }
  .detail-header {
    display: flex;
  }
  .event-meta-data {
    flex: 1;
    margin-bottom: 1rem;
    .title {
      font-size: 2.25rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
      line-height: 1;
      margin-bottom: 0.5rem;
      color: ${putTheme("primary")};
      text-shadow: 0 0 10px ${putTheme("primary")}${opacity(0.75)};
    }
    div {
      display: flex;
      color: ${putTheme("secondary")}${opacity(0.3)};
      font-weight: 600;
      letter-spacing: 2px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  .description {
    flex: 1;
    font-size: 1.135rem;
    font-family: ${({ theme }) => theme.font.content};
    line-height: 1.6;
    color: ${putTheme("secondary")}${opacity(0.85)};
    margin-bottom: 2rem;
    text-overflow: ellipsis;
    max-height: 150px;
    overflow: hidden;
  }

  .event-time-data {
    display: flex;
    gap: 1rem;
    .time-header {
      display: inline-block;
      width: 100%;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${putTheme("secondary")}${opacity(0.55)};
    }
    time {
      font-weight: 600;
    }
  }
`;

const Contest = () => {
  return (
    <Wrapper>
      <section className="container">
        <section className="graphic-content">
          <h2 className="contest-name">Technofest</h2>
          <time className="contest-time">June 20, 2021</time>
        </section>

        <section className="detail-content">
          <div className="detail-header">
            <div className="event-meta-data">
              <h2 className="title">Technofest</h2>
              <div>
                <span>
                  <UserIcon />
                </span>
                <span className="regisration-count">120 Registrations</span>
              </div>
            </div>

            <div className="registration">
              <Button varient="glow">Register</Button>
            </div>
          </div>

          <p className="description">
            Join Techofest the interview, a university coding contest where you can show off skills
            and practice for interviews. The top scorers from India will have chance to win prizes
            and have thier results shared with sponser compaines.
          </p>

          <div className="event-time-data">
            <div className="wrapper">
              <span className="time-header">Starts On</span>
              <time>June 20, 2021</time>
            </div>
            <div className="wrapper">
              <span className="time-header">Ends On</span>
              <time>June 25, 2021</time>
            </div>
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default Contest;
