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
        placeholder="John"
        register={register("firstName", formConfig.firstName)}
      />
      <Field
        error={errors}
        touch={touchedFields.lastName}
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Smith"
        register={register("lastName", formConfig.lastName)}
      />
    </>
  );

  return (
    <form
      className="space-y-2 flex flex-col justify-between h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        {medium ? <GroupField>{nameField}</GroupField> : nameField}
        <EmailField errors={errors} touchedFields={touchedFields} register={register} />
        <PasswordField errors={errors} touchedFields={touchedFields} register={register} validate />
        <PasswordField
          errors={errors}
          touchedFields={touchedFields}
          label="Confirm Password"
          register={register}
          validate
        />
      </div>

      <div className="pt-2">
        <Button varient="outlined" full className="mx-auto">
          {isValid && isSubmitting ? <Spinner size={24} dark /> : "Sign Up For Now"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
