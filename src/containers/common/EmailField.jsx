import React from "react";
import { Field } from "../../components/Form";
import formConfig from "./field.config";

const EmailField = ({ errors, touchedFields, register }) => {
  return (
    <Field
      error={errors}
      touch={touchedFields.email}
      name="email"
      label="Email"
      placeholder="john@example.com"
      type="email"
      register={register("email", formConfig.email)}
    />
  );
};

export default EmailField;
