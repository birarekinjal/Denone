import React from "react";
import { Formik } from "formik";
import loginSchema from "../../schema/loginSchema.js";
import { TextInput, Button } from "../../component/index.jsx";

const login = () => {
  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <div className={"login-page"}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <>
              <h1>Login</h1>
              <form>
                <TextInput
                  type="email"
                  name="email"
                  id={""}
                  placeholder={"Enter Email"}
                  onChange={(value) => setFieldValue("email", value)}
                  error={errors.email}
                  value={values.email}
                  showError={touched.email && errors.email}
                  onBlur={() =>
                    !touched.email && setFieldTouched("email", true, true)
                  }
                />

                <TextInput
                  type="password"
                  name="password"
                  id={""}
                  placeholder={"Enter password"}
                  onChange={(value) => setFieldValue("password", value)}
                  error={errors.password}
                  value={values.password}
                  showError={touched.password && errors.password}
                  onBlur={() =>
                    !touched.password && setFieldTouched("password", true, true)
                  }
                />

                <Button buttonText={"Login"} onClick={handleSubmit} />
              </form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default login;
