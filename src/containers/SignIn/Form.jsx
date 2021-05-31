import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Button } from "../../components/styled/Button";
import { signin } from "../../actions/user";

import EmailField from "../common/EmailField";
import PasswordField from "../common/PasswordField";

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });
  const history = useHistory();
  const userState = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState.user && userState.loading === false) {
      dispatch({ type: "signin" });
      history.push("/");
    }
  }, [userState]);

  const onSubmit = (data) => {
    dispatch(signin(data));
  };
  const { errors, touchedFields } = formState;

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <EmailField errors={errors} touchedFields={touchedFields} register={register} />
      <PasswordField errors={errors} touchedFields={touchedFields} register={register} />
      <div className="pt-2">
        <Button full className="mx-auto">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
