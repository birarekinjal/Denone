import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("E-mail is not valid!")
    .required("E-mail is required!"),
  password: Yup.string().required("Password is required!"),
  mobile: Yup.number()
    .typeError("Value must be a number.")
    .integer("Value must be a number.")
    .required("Required.")
    .min(1000000000, "Enter valid number")
    .max(9999999999, "Enter valid number"),
});

export default loginSchema;
