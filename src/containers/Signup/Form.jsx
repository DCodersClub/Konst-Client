import React from "react";
import { useForm } from "react-hook-form";

import { Field, GroupField } from "../../components/Form";
import formConfig from "./form.config";
import { Button } from "../../components/styled/Button";
import useMediaQuery from "../../hooks/useMediaQuary";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/user";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onBlur",
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });

  const medium = useMediaQuery("(min-width: 640px)");
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(signup(data));

  const nameField = (
    <>
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
    </>
  );

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      {medium ? <GroupField>{nameField}</GroupField> : nameField}
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
        <Button full className="mx-auto">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
