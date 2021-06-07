import React from "react";
import styled, { css, keyframes } from "styled-components";

import { opacity, putTheme } from "../styled";

const fadeOut = keyframes`
  to {
    opacity: 1;
  }
`;

const errorStyle = ({ error }) =>
  error &&
  css`
    color: ${putTheme("danger")};
  `;
const FieldContainer = styled.div`
  /* transition: all 10500ms ease-in; */
  opacity: 0;
  margin: 1rem 0;
  animation: ${fadeOut} 750ms ease forwards;
  :hover {
    label {
      color: ${putTheme("secondary")}${opacity(1)};
      ${errorStyle}
    }
  }
`;

const LableText = styled.label`
  display: block;
  color: ${putTheme("secondary")}${opacity(0.75)};
  font-size: 0.85em;
  font-weight: 5 00;
  line-height: 1.5;
  ${errorStyle}
`;

const InputBox = styled.input`
  display: block;
  width: 100%;
  background: none;
  border-bottom: 1px solid ${putTheme("secondary")}${opacity(1)};
  font-size: 0.95rem;
  padding-bottom: 1px;
  font-family: ${({ theme }) => theme.content};
  font-weight: 600;

  ::placeholder {
    color: ${putTheme("secondary")}${opacity(0.45)};
    font-weight: 400;
  }
  :hover {
    border-color: ${putTheme("secondary")}${opacity(1)};
  }
  :focus {
    outline: none;
    border-color: ${putTheme("primary")}${opacity(0.75)};
    /* background-color: rgba(255, 255, 255, 0.35); */
  }
`;

const ErrorMessage = styled.span`
  color: ${putTheme("danger")};
  font-size: 85%;
  font-weight: 500;
  margin-left: 0.5rem;
`;

const Error = ({ children }) => {
  return (
    <ErrorMessage className="space-x-1">
      <span>{children}</span>
    </ErrorMessage>
  );
};

const Field = ({ label, register, type, placeholder, touch, error }) => {
  const { name } = register;
  const errorMessage = error[name] ? error[name]?.message : null;

  return (
    <FieldContainer aria-errormessage={errorMessage}>
      <div>
        <LableText error={touch && errorMessage} htmlFor={name}>
          <span>{label}</span>
          <span>{touch ? errorMessage && <Error>{errorMessage}</Error> : null}</span>
        </LableText>
      </div>
      <InputBox
        error={touch && errorMessage}
        type={type}
        placeholder={placeholder}
        id={name}
        aria-autocomplete="true"
        aria-required="true"
        {...register}
      />
    </FieldContainer>
  );
};

export default Field;
