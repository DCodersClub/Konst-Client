import React from "react";
import styled, { keyframes } from "styled-components";
import { AlertCircle } from "react-feather";

import { putTheme } from "../styled";

const fadeOut = keyframes`
  to {
    opacity: 1;
  }
`;

const FieldContainer = styled.div`
  /* transition: all 10500ms ease-in; */
  opacity: 0;
  animation: ${fadeOut} 750ms ease forwards;
  :hover {
    label {
      color: ${putTheme("white")}50;
    }
  }
`;

const LableText = styled.label`
  display: block;
  color: ${putTheme("white")};
  margin-bottom: 0.25rem;
`;

const InputBox = styled.input`
  display: block;
  padding: 0.3rem;
  width: 100%;

  font-size: 1.125rem;

  background-color: rgba(255, 255, 255, 0.2);

  ::placeholder {
    color: ${putTheme("white")}70;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :focus {
    background-color: rgba(255, 255, 255, 0.35);
  }
`;

const ErrorMessage = styled.span`
  color: ${putTheme("white")};
  font-size: 85%;
  font-weight: 600;

  margin-left: 0.5rem;
`;

const Error = ({ children }) => {
  return (
    <ErrorMessage className="space-x-1">
      <AlertCircle className="inline" size="14" />
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
        <LableText htmlFor={name}>
          {label}
          {touch ? errorMessage && <Error>{errorMessage}</Error> : null}
        </LableText>
      </div>
      <InputBox
        type={type}
        placeholder={placeholder}
        id={name}
        {...register}
        aria-autocomplete="true"
        aria-required="true"
      />
    </FieldContainer>
  );
};

export default Field;
