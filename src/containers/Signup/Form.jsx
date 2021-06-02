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
import Spinner from "../../components/Spinner";
import { useHistory } from "react-router";

const useComponentLogic = () => {
  const history = useHistory();
  const medium = useMediaQuery("(min-width: 640px)");
  const dispatch = useDispatch();
  return { medium, dispatch, history };
};

const Form = () => {
  const { medium, dispatch, history } = useComponentLogic();

  const { handleSubmit, register, formState } = useForm({
    mode: "onBlur",
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(signup(data));
      history.push("/");
    } catch (e) {
      formState.isSubmitSuccessful = false;
    }
  };

  const { errors, touchedFields, isValid, isSubmitting } = formState;
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
      <PasswordField errors={errors} touchedFields={touchedFields} register={register} validate />
      <div className="pt-2">
        <Button full className="mx-auto">
          {isValid && isSubmitting ? <Spinner size={24} dark /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
