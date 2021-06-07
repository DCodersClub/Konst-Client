import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Button } from "../../components/styled/Button";
import { signin } from "../../actions/user";

import EmailField from "../common/EmailField";
import PasswordField from "../common/PasswordField";
import Spinner from "../../components/Spinner";

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
  const { errors, touchedFields, isValid, isSubmitting } = formState;

  return (
    <form
      className="space-y-2 flex flex-col justify-between h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <EmailField errors={errors} touchedFields={touchedFields} register={register} />
        <PasswordField errors={errors} touchedFields={touchedFields} register={register} />
      </div>
      <div className="pt-2">
        <Button varient="outlined" full className="mx-auto">
          {isValid && isSubmitting ? <Spinner size={24} dark /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
