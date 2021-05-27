import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Field from "../../components/Field";
import { putTheme } from "../../components/styled";
import { Button } from "../../components/styled/Button";
import { translucant } from "../../components/styled/Styles";
import { LandingSection } from "../common/Common";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignupFormWrapper = styled.section`
  width: 45%;
  height: 60%;
  ${translucant}
  backdrop-filter: blur(6px);
  background-color: rgba(150, 250, 150, 0.2);

  border-radius: 0.5rem;
  /* border: 2px solid ${putTheme("primary")}; */
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
const getFieldConfig = ({ fieldName }) => {
  return {
    required: `${fieldName} Is Required`,
    minLength: {
      value: 3,
      message: "Name Is Too Small",
    },
    maxLength: {
      value: 100,
      message: "Last Name Is Too Large",
    },
    pattern: {
      value: /^[a-z ,.'-]+$/i,
      message: "Invalid Chracters Not Allowed",
    },
  };
};

const formConfig = {
  firstName: getFieldConfig({ fieldName: "firstName" }),
  lastName: getFieldConfig({ fieldName: "lastName" }),
  email: {
    required: "Email Required",
    minLength: 3,
    maxLength: {
      value: 150,
      message: "Email Too Lengthy",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "Invalid Email",
    },
  },
  password: {
    required: "Password Is Required",
    minLenght: {
      value: 7,
      message: "Password Too Small",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Minimum eight characters, at least one letter and one number:",
    },
  },
};

const Form = () => {
  const { handleSubmit, register } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <GroupField>
        <Field
          label="First Name"
          type="text"
          register={register("firstName", formConfig.firstName)}
        />
        <Field
          name="lastName"
          label="Last Name"
          type="text"
          register={register("lastName", formConfig.lastName)}
        />
      </GroupField>
      <Field
        name="email"
        label="Email"
        type="email"
        register={register("email", formConfig.email)}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        register={register("password", formConfig.password)}
      />
      <div className="pt-2">
        <Button className="mx-auto">Submit</Button>
      </div>
    </form>
  );
};

const Signup = () => {
  return (
    <LandingSection center>
      <SignupFormWrapper className="shadow-lg">
        <section className="p-5">
          <Form />
        </section>
      </SignupFormWrapper>
    </LandingSection>
  );
};

export default Signup;
