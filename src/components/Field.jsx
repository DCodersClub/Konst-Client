import React from "react";
import styled from "styled-components";
import { AlertCircle } from "react-feather";

import { putTheme } from "./styled";

const LableText = styled.label`
  display: block;
  color: ${putTheme("white")}0;
  margin-bottom: 0.25rem;
`;

const InputBox = styled.input`
  display: block;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.3rem;
  font-size: 1.125rem;

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

const FieldContainer = styled.div`
  :hover {
    label {
      color: ${putTheme("white")}50;
    }
  }
`;

const ErrorMessage = styled.span`
  margin-left: 0.5rem;
  color: ${putTheme("white")};
  font-size: 85%;
  font-weight: 600;
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
    <FieldContainer>
      <div>
        <LableText aria-errormessage={errorMessage} htmlFor={name}>
          {label}
          {!!touch && <Error>{errorMessage}</Error>}
        </LableText>
      </div>
      <InputBox type={type} placeholder={placeholder} id={name} {...register} />
    </FieldContainer>
  );
};

export default Field;
