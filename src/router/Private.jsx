/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable quotes */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = JSON.parse(localStorage.getItem("token"));
  let token;
  if (userData === null || userData === "") {
    token = null;
  } else {
    token = "my-token";
  }

  const isLogin = () => {
    if (token != null) {
      return true;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
