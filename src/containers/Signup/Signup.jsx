import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Field, regex, GroupField } from "../../components/Form";
// import { putTheme } from "../../components/styled";
import { Button } from "../../components/styled/Button";
import { translucant } from "../../components/styled/Styles";
import { LandingSection } from "../common/Common";

const SignupFormWrapper = styled.section`
  width: 45%;
  height: 60%;
  ${translucant}
  backdrop-filter: blur(6px);
  background-color: rgba(150, 250, 150, 0.2);

  border-radius: 0.5rem;
`;

const getFieldConfig = () => {
  return {
    required: `Required`,
    minLength: {
      value: 3,
      message: "Name Is Too Small",
    },
    maxLength: {
      value: 100,
      message: "Last Name Is Too Large",
    },
    pattern: {
      value: regex.name,
      message: "Invalid Chracters Not Allowed",
    },
  };
};

const formConfig = {
  firstName: getFieldConfig(),
  lastName: getFieldConfig(),
  email: {
    required: "Required",
    minLength: 3,
    maxLength: {
      value: 150,
      message: "Email Too Lengthy",
    },
    pattern: {
      value: regex.email,
      message: "Invalid Email",
    },
  },
  password: {
    required: "Required",
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

class FormField {
  constructor(props = {}) {
    const keys = Object.keys(props);
    const fieldRegex = /name|label|type|defaultValue/;

    keys.forEach((key) => {
      if (!fieldRegex.test(key)) {
        // eslint-disable-next-line no-console
        console.log("Unknow Field");
        return;
      }
      this[key] = props[key];
    });
  }
}

const FormBluePrint = {
  structureList: [
    new FormField({ name: "firstName", label: "First Name", type: "text", defaultValue: "" }),
    new FormField({ name: "lastName", label: "Last Name", type: "text", defaultValue: "" }),
    new FormField({ name: "email", label: "Email", type: "email", defaultValue: "" }),
    new FormField({ name: "password", label: "Password", type: "password", defaultValue: "" }),
  ],
  defaultValues() {
    const defaultValues = {};
    this.structureList.forEach((field) => (defaultValues[field.name] = field.defaultValue));
    return defaultValues;
  },
};

const Form = () => {
  const {
    handleSubmit,
    register,
    // control,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onBlur",
    defaultValues: FormBluePrint.defaultValues(),
  });
  // TODO
  // const { fields } = useFieldArray({
  //   control,
  //   name: "signup",
  // });

  // console.log(fields);
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      {/* {FormBluePrint.structureList.map((field) => {
        return (
          <Field
            key={Math.random()}
            error={errors}
            label={field.label}
            touch={touchedFields[field.name]}
            type={field.type}
            register={register(field.name, formConfig[name])}
          />
        );
      })} */}
      <GroupField>
        <Field
          error={errors}
          touch={touchedFields.firstName}
          label="First Name"
          type="text"
          register={register("firstName", formConfig.firstName)}
        />
        <Field
          error={errors}
          touch={touchedFields.lastName}
          name="lastName"
          label="Last Name"
          type="text"
          register={register("lastName", formConfig.lastName)}
        />
      </GroupField>
      <Field
        error={errors}
        touch={touchedFields.email}
        name="email"
        label="Email"
        type="email"
        register={register("email", formConfig.email)}
      />
      <Field
        error={errors}
        touch={touchedFields.password}
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
