import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Field } from "../../components/Form";
import formConfig from "./form.config";
import { Button } from "../../components/styled/Button";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/user";
import { useHistory } from "react-router";

const Form = () => {
  const userState = useSelector((store) => store.userState);
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(signin(data));
  };

  useEffect(() => {
    if (userState.user && userState.loading === false) {
      dispatch({ type: "signin" });
      history.push("/");
    }
  }, [userState]);

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
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
        register={register("password", { ...formConfig.password, pattern: undefined })}
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
