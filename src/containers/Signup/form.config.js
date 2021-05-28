import { regex } from "../../components/Form";

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

export default {
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
      value: regex.password,
      message: "Minimum eight characters, at least one letter and one number:",
    },
  },
};
