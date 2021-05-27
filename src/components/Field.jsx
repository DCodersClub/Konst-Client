import React from "react";
import styled from "styled-components";
import { putTheme } from "./styled";

const LableText = styled.label`
  display: block;
  color: ${putTheme("primary")}ff;
  margin-bottom: 0.25rem;
  &:focus-within {
    color: ${putTheme("white")};
    background-color: aliceblue;
  }
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
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const FieldContainer = styled.div`
  :hover {
    label {
      color: ${putTheme("white")}90;
    }
  }
`;

const Field = ({ label, name, register, type, placeholder }) => {
  return (
    <FieldContainer>
      <LableText htmlFor={name}>{label}</LableText>
      <InputBox type={type} placeholder={placeholder} id={name} {...register} />
    </FieldContainer>
  );
};

export default Field;
