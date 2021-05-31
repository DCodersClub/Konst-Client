import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Field, GroupField } from "../../components/Form";
import { Button } from "../../components/styled/Button";

import useMediaQuery from "../../hooks/useMediaQuary";
import { signup } from "../../actions/user";

import formConfig from "../common/field.config";
import EmailField from "../common/EmailField";
import PasswordField from "../common/PasswordField";

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    mode: "onBlur",
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });
  const medium = useMediaQuery("(min-width: 640px)");
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(signup(data));
  const { errors, touchedFields } = formState;
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
      <EmailField errors={errors} touchedFields={touchedFields} register={register} />
      <PasswordField errors={errors} touchedFields={touchedFields} validate register={register} />
      <div className="pt-2">
        <Button full className="mx-auto">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
