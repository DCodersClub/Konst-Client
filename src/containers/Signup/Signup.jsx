import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Field from "../../components/Field";
import { putTheme } from "../../components/styled";
import { translucant } from "../../components/styled/Styles";
import { LandingSection } from "../common/Common";

const SignupFormWrapper = styled.section`
  width: 60%;
  height: 60%;
  ${translucant}

  border-radius: 0.5rem;
  border: 2px solid ${putTheme("primary")};
`;

const GroupField = styled.div`
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
    & + * {
      margin-left: 0.5rem;
    }
  }
`;

const Form = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => alert(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GroupField>
        <Field name="firstname" label="First Name" type="text" value="Harsh" />
        <Field name="firstname" label="First Name" type="text" value="Harsh" />
      </GroupField>
      <Field name="firstname" label="First Name" type="text" value="Harsh" />
    </form>
  );
};

const Signup = () => {
  return (
    <LandingSection center>
      <SignupFormWrapper className="bg-white">
        <section className="p-5">
          <Form />
        </section>
      </SignupFormWrapper>
    </LandingSection>
  );
};

export default Signup;
