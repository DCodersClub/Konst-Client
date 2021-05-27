import React from "react";
import styled from "styled-components";

const LableText = styled.label`
  display: block;
`;

const InputBox = styled.input`
  display: block;
  width: 100%;
`;

const Field = ({ label, name, ...rest }) => {
  return (
    <div>
      <LableText htmlFor={name}>{label}</LableText>
      <InputBox {...rest} />
    </div>
  );
};

export default Field;
