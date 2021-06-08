import React, { useMemo } from "react";
import { Field } from "../../components/Form";
import formConfig from "./field.config";

const PasswordField = ({ errors, touchedFields, register, validate, label }) => {
  const config = useMemo(() => {
    if (validate) return formConfig.password;
    formConfig.password.pattern = undefined;
    return formConfig.password;
  }, [validate]);

  return (
    <Field
      error={errors}
      touch={touchedFields.password}
      name={label ? "confirmPassword" : "password"}
      label={label ? label : "Password"}
      type="password"
      register={register("password", config)}
    />
  );
};

export default PasswordField;
