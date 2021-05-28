import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { putTheme } from ".";

const ButtonCommon = css`
  padding: 0.5rem;
  font-weight: 600;
`;

const StyledButton = styled.button`
  ${ButtonCommon}
  background-color: ${putTheme("primary")};
  color: ${putTheme("background")};
  transition: transform 100ms ease-in;

  ${({ full }) =>
    full &&
    css`
      display: inline-block;
      width: 100%;
    `}

  ${({ small }) =>
    small &&
    css`
      padding: 0.25rem;
      font-size: 0.9rem;
      border-radius: 0.25rem;
    `}

  :active {
    outline: none;
    transform: scale(0.99);
  }
`;

const IntraButtonWrapper = styled.button`
  ${ButtonCommon}
  position: relative;
  overflow: hidden;
  transition: color 200ms ease 50ms;

  .clipped {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;

    transition: clip-path 300ms ease-in 50ms;
    background-color: ${putTheme("primary")};
  }

  :hover {
    color: ${putTheme("background")};
  }
`;

const useComponentMouseIntraction = () => {
  const [clipConfig, setClipConfig] = useState({ size: 0, x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (!ref) return;
    const getMouseCoord = (e) => {
      const height = ref.current.clientHeight;
      const width = ref.current.clientWidth;
      const x = Math.floor((e.offsetX / width) * 100);
      const y = Math.floor((e.offsetY / height) * 100);

      return { x, y };
    };
    const handelMouseEnter = (e) => {
      const { x, y } = getMouseCoord(e);
      setClipConfig(() => ({ size: 150, x, y }));
    };

    const mouseLeaveHandler = (e) => {
      const { x, y } = getMouseCoord(e);
      setClipConfig(() => ({ size: 0, x, y }));
    };
    ref.current.addEventListener("mouseenter", handelMouseEnter);
    ref.current.addEventListener("mouseleave", mouseLeaveHandler);
    const element = ref.current;
    return () => {
      element.removeEventListener("mouseenter", handelMouseEnter);
      element.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, [ref]);

  return { ref, clipConfig };
};

const IntractiveButton = ({ children }) => {
  const { ref, clipConfig } = useComponentMouseIntraction();
  return (
    <IntraButtonWrapper ref={ref}>
      <span
        className="clipped"
        style={{ clipPath: `circle(${clipConfig.size}% at ${clipConfig.x}% ${clipConfig.y}%)` }}
      ></span>
      <span>{children}</span>
    </IntraButtonWrapper>
  );
};

export const Button = ({ intractive, children, small, full }) => {
  if (intractive) return <IntractiveButton>{children}</IntractiveButton>;

  return (
    <StyledButton full={full} small={small}>
      {children}
    </StyledButton>
  );
};
